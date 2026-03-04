/**
 * Send a WhatsApp message via WAzion API (Node.js)
 *
 * Usage:
 *   WAZION_TOKEN=your_token node send-message.js
 */

const API_URL = "https://www.wazion.com/api/mcp/";

async function callTool(token, toolName, args) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "tools/call",
      params: {
        name: toolName,
        arguments: args,
      },
      id: 1,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(`RPC Error: ${data.error.message}`);
  }

  if (data.result?.isError) {
    throw new Error(`Tool Error: ${data.result.content[0].text}`);
  }

  return data.result;
}

async function main() {
  const token = process.env.WAZION_TOKEN;
  if (!token) {
    console.error("Error: Set the WAZION_TOKEN environment variable.");
    process.exit(1);
  }

  try {
    const result = await callTool(token, "send_whatsapp_message", {
      phone: "+34600000000",
      message: "Hello from WAzion Node.js!",
      session_id: 1,
    });

    console.log("Success:", result.content[0].text);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
