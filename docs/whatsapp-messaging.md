---
sidebar_position: 2
---
# WhatsApp Messaging

Send and receive WhatsApp messages, manage sessions, schedule messages, and use templates.

## Prerequisites

- At least one WhatsApp session connected (scan QR code from the dashboard)
- Valid API token ([Authentication](./authentication.md))

## Sending a Message

Use the `send_whatsapp_message` tool to send a text message:

### curl

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAZION_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "send_whatsapp_message",
      "arguments": {
        "phone": "+34600000000",
        "message": "Hello! Your order has been shipped.",
        "session_id": 1
      }
    },
    "id": 1
  }'
```

### Python

```python
import requests

def send_message(token, phone, message, session_id):
    response = requests.post(
        "https://www.wazion.com/api/mcp/",
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {token}"
        },
        json={
            "jsonrpc": "2.0",
            "method": "tools/call",
            "params": {
                "name": "send_whatsapp_message",
                "arguments": {
                    "phone": phone,
                    "message": message,
                    "session_id": session_id
                }
            },
            "id": 1
        }
    )
    return response.json()

result = send_message("wz_abc123...", "+34600000000", "Hello!", 1)
print(result)
```

## Phone Number Format

Phone numbers must include the international prefix with `+`:

- Correct: `+34600000000`
- Incorrect: `600000000`, `0034600000000`

## Sending Messages Costs Credits

Each message sent via the API costs **500 credits** (normal messages) or **1000 credits** (mass marketing campaign messages). Check your credit balance with `get_credits_info`.

## Session Management

### Check Session Status

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_whatsapp_status",
    "arguments": {}
  }
}
```

Returns all connected WhatsApp sessions with their status (`connected`, `disconnected`, `qr_pending`).

### Connect a New WhatsApp Number

```json
{
  "method": "tools/call",
  "params": {
    "name": "connect_whatsapp",
    "arguments": {
      "label": "Sales Team"
    }
  }
}
```

This returns a QR code that must be scanned from WhatsApp on a mobile device.

### Get WhatsApp Profile

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_whatsapp_profile",
    "arguments": {
      "session_id": 1
    }
  }
}
```

### Update WhatsApp Profile

```json
{
  "method": "tools/call",
  "params": {
    "name": "update_whatsapp_profile",
    "arguments": {
      "session_id": 1,
      "name": "My Business",
      "status": "Online 9-18h",
      "description": "Official WhatsApp for customer support"
    }
  }
}
```

## Scheduled Messages

### Schedule a Message

```json
{
  "method": "tools/call",
  "params": {
    "name": "create_scheduled_message",
    "arguments": {
      "session_id": 1,
      "phone": "+34600000000",
      "message_text": "Reminder: your appointment is tomorrow at 10:00",
      "scheduled_at": "2026-03-05T09:00:00"
    }
  }
}
```

### List Scheduled Messages

```json
{
  "method": "tools/call",
  "params": {
    "name": "list_scheduled_messages",
    "arguments": {
      "status": "pending"
    }
  }
}
```

### Cancel a Scheduled Message

```json
{
  "method": "tools/call",
  "params": {
    "name": "cancel_scheduled_message",
    "arguments": {
      "id": 42
    }
  }
}
```

## Message Templates

Save and reuse message templates:

### Save a Template

```json
{
  "method": "tools/call",
  "params": {
    "name": "save_as_whatsapp_template",
    "arguments": {
      "name": "Order Shipped",
      "category": "notifications"
    }
  }
}
```

### List Templates

```json
{
  "method": "tools/call",
  "params": {
    "name": "list_whatsapp_templates",
    "arguments": {}
  }
}
```

## Message Logs

View recent messages sent and received:

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_whatsapp_message_logs",
    "arguments": {
      "direction": "outgoing",
      "limit": 20,
      "hours": 24
    }
  }
}
```

## Opt-Out Management

Respect customer opt-out preferences:

| Tool | Description |
|------|-------------|
| `list_whatsapp_optout` | List customers who opted out |
| `add_whatsapp_optout` | Add a phone to opt-out list |
| `remove_whatsapp_optout` | Remove a phone from opt-out |
| `check_whatsapp_optout` | Check if a phone has opted out |

## Related Tools

| Tool | Description |
|------|-------------|
| `send_whatsapp_message` | Send a text message |
| `get_whatsapp_status` | Check all session statuses |
| `get_whatsapp_health` | Combined health check |
| `get_whatsapp_message_logs` | View message history |
| `connect_whatsapp` | Start new session |
| `disconnect_whatsapp` | Disconnect a session |
| `reconnect_whatsapp` | Reconnect existing session |
| `delete_whatsapp_session` | Delete a disconnected session |
| `get_whatsapp_qr` | Get QR code for connection |
| `update_whatsapp_session` | Update session label |
| `get_whatsapp_conversation_history` | Full chat history with a phone |
| `create_scheduled_message` | Schedule a message |
| `list_scheduled_messages` | List pending scheduled messages |
| `cancel_scheduled_message` | Cancel a scheduled message |
| `list_whatsapp_templates` | List saved templates |
| `save_as_whatsapp_template` | Save a new template |
| `delete_whatsapp_template` | Delete a template |
| `get_whatsapp_profile` | Get WhatsApp profile info |
| `update_whatsapp_profile` | Update profile (name, status, etc.) |
| `update_whatsapp_profile_picture` | Change profile picture |

## Gotchas

- The `session_id` parameter refers to the internal session ID (integer), not the phone number. Use `get_whatsapp_status` to find session IDs.
- Messages are sent through the WAzion VPS WhatsApp bridge, not the official WhatsApp Business API. This means standard WhatsApp rate limits apply.
- The `archive_after_send` parameter in `send_whatsapp_message` will archive the chat on WhatsApp after sending.
- Minimum 3 seconds between messages per session (rate limited server-side).
- If the billing/credits API is unreachable, message sends are blocked (fail-closed). The system prioritizes preventing unpaid usage over message delivery.
