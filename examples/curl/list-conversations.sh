#!/bin/bash
# List recent WhatsApp conversations via WAzion API
# Usage: WAZION_TOKEN=your_token ./list-conversations.sh

WAZION_TOKEN="${WAZION_TOKEN:?Set WAZION_TOKEN environment variable}"
API_URL="https://www.wazion.com/api/mcp/"

curl -s -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAZION_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get_recent_conversations",
      "arguments": {
        "limit": 10
      }
    },
    "id": 1
  }' | python3 -m json.tool
