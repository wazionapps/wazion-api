---
sidebar_position: 5
---
# Mass Marketing

Send WhatsApp campaigns to contact lists with scheduling, segmentation, auto-reply, and unsubscribe management.

## Overview

The mass marketing system lets you:
- Create and manage contact lists
- Build campaigns with message text, media, and scheduling
- Send campaigns across multiple WhatsApp sessions (round-robin)
- Track delivery status per contact
- Handle unsubscribes automatically
- Configure auto-reply for campaign responses

## Creating a Campaign

### curl

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAZION_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "create_campaign",
      "arguments": {
        "name": "March Promotion",
        "message_text": "Hi! We have a special offer for you this month. Check it out at https://mystore.com/promo",
        "list_id": 1,
        "include_unsubscribe_link": true,
        "send_interval_seconds": 30,
        "session_ids": [1, 2]
      }
    },
    "id": 1
  }'
```

### Python

```python
import requests

def create_campaign(token, name, message, list_id, session_ids):
    return requests.post(
        "https://www.wazion.com/api/mcp/",
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {token}"
        },
        json={
            "jsonrpc": "2.0",
            "method": "tools/call",
            "params": {
                "name": "create_campaign",
                "arguments": {
                    "name": name,
                    "message_text": message,
                    "list_id": list_id,
                    "session_ids": session_ids,
                    "include_unsubscribe_link": True,
                    "send_interval_seconds": 30
                }
            },
            "id": 1
        }
    ).json()
```

## Campaign Lifecycle

```
draft → start → running → completed
                  ↓
                pause → resume → running
                  ↓
                cancel
```

| Tool | Description |
|------|-------------|
| `create_campaign` | Create a new campaign (starts as draft) |
| `start_campaign` | Begin sending |
| `pause_campaign` | Pause a running campaign |
| `resume_campaign` | Resume a paused campaign |
| `cancel_campaign` | Cancel permanently |
| `archive_campaign` | Archive a completed campaign |
| `unarchive_campaign` | Restore an archived campaign |

## Contact Lists

### Create a List

```json
{
  "name": "create_contact_list",
  "arguments": {
    "name": "VIP Customers",
    "description": "High-value repeat customers"
  }
}
```

### Add Contacts

```json
{
  "name": "add_contacts_to_list",
  "arguments": {
    "list_id": 1,
    "contacts": [
      {"phone": "+34600000001", "name": "John"},
      {"phone": "+34600000002", "name": "Maria"}
    ]
  }
}
```

### Import from Conversations

Import all phone numbers from your WhatsApp conversation history:

```json
{
  "name": "import_contacts_from_conversations",
  "arguments": {
    "list_id": 1
  }
}
```

### Create List from Inactive Customers

```json
{
  "name": "create_list_from_inactive",
  "arguments": {
    "days": 30,
    "name": "Inactive 30+ days"
  }
}
```

## Scheduling Campaigns

```json
{
  "name": "create_campaign",
  "arguments": {
    "name": "Black Friday",
    "message_text": "Black Friday sale is live!",
    "list_id": 1,
    "session_ids": [1],
    "scheduled_at": "2026-11-27T09:00:00"
  }
}
```

Cancel a scheduled campaign:

```json
{
  "name": "cancel_campaign_schedule",
  "arguments": {
    "campaign_id": 5
  }
}
```

## Segmentation

Filter contacts within a list before sending:

```json
{
  "name": "count_filtered_contacts",
  "arguments": {
    "list_id": 1,
    "segment_filters": {
      "tags": ["vip"],
      "exclude_tags": ["unsubscribed"]
    }
  }
}
```

## Blacklist

Block specific numbers from receiving campaigns:

| Tool | Description |
|------|-------------|
| `list_blacklist` | View blocked numbers |
| `add_to_blacklist` | Block a number |
| `remove_from_blacklist` | Unblock a number |
| `bulk_add_to_blacklist` | Block multiple numbers |

## Unsubscribe Management

| Tool | Description |
|------|-------------|
| `get_unsubscribed_list` | View unsubscribed contacts |
| `remove_unsubscribed_bulk` | Remove unsubscribe records |

## Campaign Configuration

Global settings for mass marketing:

```json
{
  "name": "save_mass_marketing_config",
  "arguments": {
    "auto_reply_enabled": true,
    "auto_reply_text": "Thanks for your reply! An agent will contact you shortly.",
    "auto_reply_translate": true,
    "auto_reply_unsubscribe": true
  }
}
```

## All Mass Marketing Tools (39 tools)

| Tool | Type | Description |
|------|------|-------------|
| `get_mass_marketing_config` | query | Get marketing configuration |
| `save_mass_marketing_config` | mutation | Save marketing configuration |
| `list_contact_lists` | query | List all contact lists |
| `create_contact_list` | mutation | Create a contact list |
| `delete_contact_list` | mutation | Delete a contact list |
| `get_contact_list_detail` | query | View contacts in a list |
| `add_contacts_to_list` | mutation | Add contacts to a list |
| `remove_contact_from_list` | mutation | Remove a contact |
| `remove_contacts_bulk` | mutation | Remove multiple contacts |
| `import_marketing_contacts` | mutation | Import contacts (various sources) |
| `import_contacts_manual` | mutation | Import from typed phone numbers |
| `import_contacts_from_conversations` | mutation | Import from conversation history |
| `list_campaigns` | query | List all campaigns |
| `get_campaign` | query | Get campaign details |
| `create_campaign` | mutation | Create a campaign |
| `update_campaign` | mutation | Update a draft campaign |
| `delete_campaign` | mutation | Delete a campaign |
| `duplicate_campaign` | mutation | Duplicate a campaign |
| `start_campaign` | mutation | Start sending |
| `pause_campaign` | mutation | Pause sending |
| `resume_campaign` | mutation | Resume sending |
| `cancel_campaign` | mutation | Cancel permanently |
| `archive_campaign` | mutation | Archive completed campaign |
| `unarchive_campaign` | mutation | Restore archived campaign |
| `approve_campaign` | mutation | Approve pending campaign |
| `cancel_campaign_schedule` | mutation | Cancel scheduled send |
| `get_campaign_logs` | query | View send logs |
| `export_campaign_csv` | query | Export logs as CSV |
| `get_mass_marketing_stats` | query | Campaign statistics |
| `count_filtered_contacts` | query | Count contacts with filters |
| `get_marketing_sessions` | query | WhatsApp sessions for marketing |
| `assign_marketing_session` | mutation | Enable/disable session for marketing |
| `list_blacklist` | query | View blocked numbers |
| `add_to_blacklist` | mutation | Block a number |
| `remove_from_blacklist` | mutation | Unblock a number |
| `bulk_add_to_blacklist` | mutation | Block multiple numbers |
| `get_unsubscribed_list` | query | View unsubscribed contacts |
| `remove_unsubscribed_bulk` | mutation | Remove unsubscribe records |
| `create_list_from_inactive` | mutation | Create list from inactive customers |
| `create_list_from_followup` | mutation | Create list from follow-up data |

## Gotchas

- Each campaign message costs **1000 credits** (2x the normal message cost).
- Default send interval is 30 seconds between messages to avoid WhatsApp rate limits.
- The `session_ids` field accepts multiple sessions for round-robin sending.
- Campaigns can only be updated while in `draft` status.
- The unsubscribe link uses HMAC tokens for security. The system generates a cryptographically secure random salt if not configured.
- Contacts are automatically excluded if they are in the unsubscribe or blacklist.
