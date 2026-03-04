# WhatsApp Auto Workflows

Automate WhatsApp responses with conditional workflows. Workflows evaluate incoming messages against conditions and execute actions automatically.

## Concepts

- **Trigger**: What starts the workflow (e.g., `message_received`)
- **Conditions**: Rules to match (keyword, phone prefix, time of day, etc.)
- **Actions**: What to do when conditions match (reply with text, reply with AI, assign agent, etc.)

## Creating a Workflow

### curl

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAZION_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "create_whatsapp_workflow",
      "arguments": {
        "name": "Welcome Message",
        "trigger_type": "message_received",
        "conditions": [
          {"type": "keyword", "value": "hello", "operator": "contains"}
        ],
        "actions": [
          {"type": "reply_text", "value": "Welcome! How can I help you today?"}
        ],
        "status": "active",
        "session_id": 1
      }
    },
    "id": 1
  }'
```

### Python

```python
import requests

def create_workflow(token, name, conditions, actions, session_id):
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
                "name": "create_whatsapp_workflow",
                "arguments": {
                    "name": name,
                    "trigger_type": "message_received",
                    "conditions": conditions,
                    "actions": actions,
                    "status": "active",
                    "session_id": session_id
                }
            },
            "id": 1
        }
    ).json()

# Auto-reply with AI for any message
result = create_workflow(
    "wz_abc...",
    "AI Auto-Reply",
    [],
    [{"type": "reply_with_ai"}],
    1
)
```

## Listing Workflows

```json
{
  "method": "tools/call",
  "params": {
    "name": "list_whatsapp_workflows",
    "arguments": {}
  }
}
```

## Updating a Workflow

Supports partial updates -- only send the fields you want to change:

```json
{
  "method": "tools/call",
  "params": {
    "name": "update_whatsapp_workflow",
    "arguments": {
      "id": 1,
      "name": "Updated Welcome Message",
      "actions": [
        {"type": "reply_text", "value": "Hi! We're here to help."}
      ]
    }
  }
}
```

## Toggle Workflow On/Off

```json
{
  "method": "tools/call",
  "params": {
    "name": "toggle_whatsapp_workflow",
    "arguments": {
      "id": 1,
      "enabled": false
    }
  }
}
```

## Dry Run (Simulate)

Test a workflow without actually sending any messages:

```json
{
  "method": "tools/call",
  "params": {
    "name": "dry_run_workflow",
    "arguments": {
      "workflow_id": 1,
      "test_message": "Hello, I need help with my order",
      "test_phone": "+34600000000"
    }
  }
}
```

## Reorder Workflows

Workflows are evaluated in order. Change the evaluation order:

```json
{
  "method": "tools/call",
  "params": {
    "name": "reorder_whatsapp_workflows",
    "arguments": {
      "order": [3, 1, 2]
    }
  }
}
```

## Bulk Operations

```json
// Enable multiple workflows
{
  "name": "bulk_toggle_workflows",
  "arguments": {
    "workflow_ids": [1, 2, 3],
    "enabled": true
  }
}

// Delete multiple workflows
{
  "name": "bulk_delete_workflows",
  "arguments": {
    "workflow_ids": [4, 5]
  }
}
```

## Workflow Logs

View execution history:

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_whatsapp_workflow_logs",
    "arguments": {
      "limit": 20,
      "period": "7d"
    }
  }
}
```

## All Workflow Tools

| Tool | Description |
|------|-------------|
| `list_whatsapp_workflows` | List all workflows |
| `create_whatsapp_workflow` | Create a new workflow |
| `update_whatsapp_workflow` | Modify an existing workflow |
| `toggle_whatsapp_workflow` | Enable/disable a workflow |
| `delete_whatsapp_workflow` | Delete a workflow |
| `reorder_whatsapp_workflows` | Change evaluation order |
| `bulk_toggle_workflows` | Enable/disable multiple workflows |
| `bulk_delete_workflows` | Delete multiple workflows |
| `dry_run_workflow` | Simulate a workflow |
| `get_whatsapp_workflow_logs` | View execution history |
| `get_whatsapp_workflow_stats` | Workflow performance stats |
| `get_workflow_session_stats` | Stats for a specific session |
| `create_whatsapp_template_from_workflow` | Create workflow from template |

## Gotchas

- Workflows evaluate in order. The first matching workflow wins. Use `reorder_whatsapp_workflows` to set priority.
- An empty `conditions` array means the workflow matches all messages.
- The `reply_with_ai` action uses the shop's AI prompt and consumes credits.
- If the AI reply fails (e.g., credit exhaustion), it is queued for retry automatically.
- Deleting a workflow that is referenced by scheduled messages or campaigns may affect those.
