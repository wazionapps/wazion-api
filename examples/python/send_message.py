"""
Send a WhatsApp message via WAzion API.

Usage:
    export WAZION_TOKEN=your_token
    python send_message.py
"""

import os
import sys
import requests


def call_tool(token: str, tool_name: str, arguments: dict, request_id: int = 1) -> dict:
    """Call a WAzion MCP tool via JSON-RPC 2.0."""
    response = requests.post(
        "https://www.wazion.com/api/mcp/",
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
            "id": request_id,
        },
        timeout=60,
    )
    response.raise_for_status()
    return response.json()


def send_message(token: str, phone: str, message: str, session_id: int) -> dict:
    """Send a WhatsApp message."""
    return call_tool(token, "send_whatsapp_message", {
        "phone": phone,
        "message": message,
        "session_id": session_id,
    })


def main():
    token = os.environ.get("WAZION_TOKEN")
    if not token:
        print("Error: Set the WAZION_TOKEN environment variable.", file=sys.stderr)
        sys.exit(1)

    result = send_message(
        token=token,
        phone="+34600000000",
        message="Hello from the WAzion Python SDK!",
        session_id=1,
    )

    # Check for JSON-RPC errors
    if "error" in result:
        print(f"RPC Error: {result['error']['message']}", file=sys.stderr)
        sys.exit(1)

    # Check for tool-level errors
    tool_result = result.get("result", {})
    if tool_result.get("isError"):
        text = tool_result["content"][0]["text"]
        print(f"Tool Error: {text}", file=sys.stderr)
        sys.exit(1)

    # Success
    text = tool_result["content"][0]["text"]
    print(f"Success: {text}")


if __name__ == "__main__":
    main()
