#!/bin/bash
# Send a WhatsApp message via WAzion API
# Usage: WAZION_TOKEN=your_token ./send-message.sh

WAZION_TOKEN="${WAZION_TOKEN:?Set WAZION_TOKEN environment variable}"
API_URL="https://www.wazion.com/api/mcp/"

PHONE="+34600000000"
MESSAGE="Hello from WAzion API!"
SESSION_ID=1

curl -s -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAZION_TOKEN" \
  -d "{
    \"jsonrpc\": \"2.0\",
    \"method\": \"tools/call\",
    \"params\": {
      \"name\": \"send_whatsapp_message\",
      \"arguments\": {
        \"phone\": \"$PHONE\",
        \"message\": \"$MESSAGE\",
        \"session_id\": $SESSION_ID
      }
    },
    \"id\": 1
  }" | python3 -m json.tool
