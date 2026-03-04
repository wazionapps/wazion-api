/**
 * Create a WhatsApp Auto workflow via WAzion API (Node.js)
 *
 * Usage:
 *   WAZION_TOKEN=your_token node workflow-create.js
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
    // Create an FAQ auto-reply workflow
    console.log("Creating workflow...");
    const result = await callTool(token, "create_whatsapp_workflow", {
      name: "FAQ Auto-Reply",
      trigger_type: "message_received",
      conditions: [
        {
          type: "keyword",
          value: "hours|schedule|open|horario",
          operator: "matches_any",
        },
      ],
      actions: [
        {
          type: "reply_text",
          value:
            "Our business hours are:\n" +
            "Mon-Fri: 9:00 - 18:00\n" +
            "Sat: 10:00 - 14:00\n" +
            "Sun: Closed",
        },
      ],
      status: "active",
      session_id: 1,
    });

    console.log("Workflow created:", result.content[0].text);

    // Dry run to test it
    console.log("\nTesting with dry run...");
    const dryRun = await callTool(token, "dry_run_workflow", {
      workflow_id: 1,
      test_message: "What are your hours?",
      test_phone: "+34600000000",
    });

    console.log("Dry run result:", dryRun.content[0].text);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
