<?php
/**
 * Send a WhatsApp message via WAzion API (PHP)
 *
 * Usage:
 *   WAZION_TOKEN=your_token php send_message.php
 */

$token = getenv('WAZION_TOKEN');
if (!$token) {
    fwrite(STDERR, "Error: Set the WAZION_TOKEN environment variable.\n");
    exit(1);
}

$apiUrl = 'https://www.wazion.com/api/mcp/';

function callTool(string $token, string $apiUrl, string $toolName, array $arguments): array
{
    $payload = json_encode([
        'jsonrpc' => '2.0',
        'method'  => 'tools/call',
        'params'  => [
            'name'      => $toolName,
            'arguments' => $arguments,
        ],
        'id' => 1,
    ]);

    $ch = curl_init($apiUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $payload,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 60,
        CURLOPT_HTTPHEADER     => [
            'Content-Type: application/json',
            "Authorization: Bearer {$token}",
        ],
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error    = curl_error($ch);
    curl_close($ch);

    if ($error) {
        throw new RuntimeException("cURL error: {$error}");
    }

    if ($httpCode !== 200) {
        throw new RuntimeException("HTTP {$httpCode}: {$response}");
    }

    $data = json_decode($response, true);

    if (isset($data['error'])) {
        throw new RuntimeException("RPC Error: {$data['error']['message']}");
    }

    if (!empty($data['result']['isError'])) {
        throw new RuntimeException("Tool Error: {$data['result']['content'][0]['text']}");
    }

    return $data['result'];
}

// Send a message
try {
    $result = callTool($token, $apiUrl, 'send_whatsapp_message', [
        'phone'      => '+34600000000',
        'message'    => 'Hello from WAzion PHP!',
        'session_id' => 1,
    ]);

    echo "Success: " . $result['content'][0]['text'] . "\n";
} catch (RuntimeException $e) {
    fwrite(STDERR, "Error: " . $e->getMessage() . "\n");
    exit(1);
}
