# CRM & Customers

Manage customer profiles, tags, comments, tasks, calendar events, and perform global searches across all data sources.

## Customer Profile

Get a complete customer profile including CRM data, comments, tags, and conversation summary:

### curl

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAZION_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get_customer_info",
      "arguments": {
        "phone": "+34600000000"
      }
    },
    "id": 1
  }'
```

### Python

```python
import requests

def get_customer(token, phone):
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
                "name": "get_customer_info",
                "arguments": {"phone": phone}
            },
            "id": 1
        }
    ).json()
```

## Global Search

Search across all data sources (CRM, contacts, conversations):

```json
{
  "name": "global_search",
  "arguments": {
    "query": "John"
  }
}
```

## Comments / Notes

Add internal notes to customer profiles:

```json
{
  "name": "add_customer_comment",
  "arguments": {
    "phone": "+34600000000",
    "comment": "Interested in premium plan. Follow up next week.",
    "agent_name": "Ana"
  }
}
```

Search across all customer notes:

```json
{
  "name": "search_customer_comments",
  "arguments": {
    "query": "premium plan"
  }
}
```

## Tags

Classify customers with colored tags:

```json
// Add a tag
{
  "name": "add_customer_tag",
  "arguments": {
    "phone": "+34600000000",
    "tag_name": "VIP",
    "tag_color": "#FFD700"
  }
}

// Remove a tag
{
  "name": "remove_customer_tag",
  "arguments": {
    "phone": "+34600000000",
    "tag_name": "VIP"
  }
}
```

Configure available tags for your shop:

```json
{
  "name": "update_customer_tags",
  "arguments": {
    "add_tag": {"name": "VIP", "color": "#FFD700"}
  }
}
```

## Customer Journey

View a complete timeline of all interactions with a customer:

```json
{
  "name": "get_customer_journey",
  "arguments": {
    "phone": "+34600000000",
    "days": 30
  }
}
```

Returns messages, comments, files, tasks, orders, and more in chronological order.

## Customer Lifetime Value

Calculate business metrics for a customer:

```json
{
  "name": "get_customer_lifetime_value",
  "arguments": {
    "phone": "+34600000000"
  }
}
```

## Merge Customers

Combine two customer records into one:

```json
{
  "name": "merge_customers",
  "arguments": {
    "primary_phone": "+34600000001",
    "secondary_phone": "+34600000002"
  }
}
```

## GDPR Compliance

Export or delete all customer data for GDPR compliance:

```json
// Export all data (Article 15)
{
  "name": "gdpr_export_customer_data",
  "arguments": {
    "phone": "+34600000000"
  }
}

// Delete all data (Article 17) - requires confirmation
{
  "name": "gdpr_delete_customer_data",
  "arguments": {
    "phone": "+34600000000",
    "confirm": true
  }
}
```

## Tasks

Create and manage tasks linked to customers:

| Tool | Description |
|------|-------------|
| `list_tasks` | List tasks with filters |
| `create_task` | Create a new task |
| `update_task` | Update task status, text, priority |
| `delete_task` | Delete a task |
| `get_overdue_tasks` | List overdue tasks |
| `get_agent_tasks` | Tasks for a specific agent |

```json
{
  "name": "create_task",
  "arguments": {
    "task_text": "Follow up on quote request",
    "phone": "+34600000000",
    "due_date": "2026-03-10",
    "priority": "high",
    "assigned_agent_id": 1
  }
}
```

## Calendar Events

Schedule events and appointments:

| Tool | Description |
|------|-------------|
| `list_calendar_events` | List events in a date range |
| `create_calendar_event` | Create a new event |
| `update_calendar_event` | Modify an event |
| `delete_calendar_event` | Delete an event |

```json
{
  "name": "create_calendar_event",
  "arguments": {
    "title": "Demo call with John",
    "start_datetime": "2026-03-10T10:00:00",
    "end_datetime": "2026-03-10T11:00:00",
    "phone": "+34600000000",
    "assigned_agent_id": 1
  }
}
```

## All Customer Tools

| Tool | Type | Description |
|------|------|-------------|
| `get_customer_info` | query | Full customer profile |
| `get_customer_comments` | query | Customer comments and tags |
| `add_customer_comment` | mutation | Add a comment |
| `search_customer_comments` | query | Search all comments |
| `add_customer_tag` | mutation | Add a tag to customer |
| `remove_customer_tag` | mutation | Remove a tag |
| `search_customers` | query | Search customers by name/phone/email |
| `get_customer_journey` | query | Full interaction timeline |
| `global_search` | query | Search across all data sources |
| `merge_customers` | mutation | Merge two customer records |
| `get_customer_lifetime_value` | query | Business value metrics |
| `gdpr_export_customer_data` | query | Export all data (GDPR) |
| `gdpr_delete_customer_data` | mutation | Delete all data (GDPR) |

## Gotchas

- Phone numbers must include the `+` international prefix.
- Tags are defined at the shop level with `update_customer_tags` and then applied to individual customers with `add_customer_tag`.
- GDPR deletion is irreversible and requires a confirmation call (`confirm: true`).
- `global_search` searches CRM records, contacts from marketing lists, and conversation history.
