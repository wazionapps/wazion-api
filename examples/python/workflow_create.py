"""
Create a WhatsApp Auto workflow via WAzion API.

Usage:
    export WAZION_TOKEN=your_token
    python workflow_create.py
"""

import os
import sys
import requests


API_URL = "https://www.wazion.com/api/mcp/"


def call_tool(token: str, tool_name: str, arguments: dict) -> dict:
    """Call a WAzion MCP tool via JSON-RPC 2.0."""
    response = requests.post(
        API_URL,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {token}",
        },
        json={
            "jsonrpc": "2.0",
            "method": "tools/call",
            "params": {
                "name": tool_name,
                "arguments": arguments,
            },
            "id": 1,
        },
        timeout=60,
    )
    response.raise_for_status()
    data = response.json()

    if "error" in data:
        raise Exception(f"RPC Error: {data['error']['message']}")

    result = data.get("result", {})
    if result.get("isError"):
        raise Exception(f"Tool Error: {result['content'][0]['text']}")

    return result


def main():
    token = os.environ.get("WAZION_TOKEN")
    if not token:
        print("Error: Set the WAZION_TOKEN environment variable.", file=sys.stderr)
        sys.exit(1)

    # Step 1: Check WhatsApp sessions
    print("Checking WhatsApp sessions...")
    status = call_tool(token, "get_whatsapp_status", {})
    print(f"Sessions: {status['content'][0]['text'][:200]}...")

    # Step 2: Create a workflow
    print("\nCreating workflow...")
    result = call_tool(token, "create_whatsapp_workflow", {
        "name": "Business Hours Auto-Reply",
        "trigger_type": "message_received",
        "conditions": [
            {
                "type": "time_range",
                "value": {"from": "09:00", "to": "18:00"},
                "operator": "outside"
            }
        ],
        "actions": [
            {
                "type": "reply_text",
                "value": "Thank you for your message! Our business hours are "
                         "9:00-18:00 Mon-Fri. We'll reply first thing in the morning."
            }
        ],
        "status": "active",
        "session_id": 1,
    })
    print(f"\nWorkflow created:\n{result['content'][0]['text']}")

    # Step 3: List all workflows
    print("\nAll workflows:")
    workflows = call_tool(token, "list_whatsapp_workflows", {})
    print(workflows["content"][0]["text"][:500])


if __name__ == "__main__":
    main()
