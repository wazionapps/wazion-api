"""
Get an AI-generated reply suggestion for a WhatsApp conversation.

Usage:
    export WAZION_TOKEN=your_token
    python ai_reply.py +34600000000
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
        timeout=120,  # AI operations can take longer
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

    phone = sys.argv[1] if len(sys.argv) > 1 else "+34600000000"

    # Step 1: Get AI summary of the conversation
    print(f"Analyzing conversation with {phone}...")
    summary = call_tool(token, "get_ai_summary", {
        "phone": phone,
        "summary_type": "quick",
    })
    print(f"\nSummary:\n{summary['content'][0]['text']}\n")

    # Step 2: Get smart reply suggestions
    print("Generating reply suggestions...")
    replies = call_tool(token, "get_smart_reply_suggestions", {
        "phone": phone,
        "tone": "friendly",
    })
    print(f"\nSuggested Replies:\n{replies['content'][0]['text']}")

    # Step 3: Get sentiment analysis
    print("\nAnalyzing sentiment...")
    sentiment = call_tool(token, "get_sentiment_analysis", {
        "phone": phone,
    })
    print(f"\nSentiment:\n{sentiment['content'][0]['text']}")


if __name__ == "__main__":
    main()
