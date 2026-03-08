---
sidebar_position: 8
---
# Webhooks

Receive real-time notifications when events happen in your WAzion account.

## Configuration

### View Current Configuration

```json
{
  "name": "get_webhook_config",
  "arguments": {}
}
```

### Configure Webhooks

```json
{
  "name": "configure_webhooks",
  "arguments": {
    "webhook_enabled": true,
    "webhook_url": "https://myapp.com/webhooks/wazion",
    "webhook_secret": "my-secret-key",
    "webhook_events": ["phone.detected", "followup.detected", "followup.replied", "followup.converted", "plugin_chat.session_closed", "test"]
  }
}
```

This action requires confirmation. Call once to see the warning, then call again with `"confirm": true`.

### Test Webhook

Send a test event to verify your endpoint works:

```json
{
  "name": "test_webhook",
  "arguments": {}
}
```

Uses the configured URL and secret automatically.

## Available Events

| Event | Description |
|-------|-------------|
| `phone.detected` | A new phone number was detected in a conversation |
| `followup.detected` | Smart Follow-up detected a potential sale to recover |
| `followup.replied` | Customer responded to a follow-up message |
| `followup.converted` | Customer made a purchase after follow-up |
| `plugin_chat.session_closed` | Chat widget session ended (includes `ai_summary`, `messages[]`, `satisfaction_score`) |
| `test` | Test event for verifying webhook connectivity |

## Webhook Payload

Webhooks are sent as POST requests with a JSON body. The payload includes:

```json
{
  "event": "phone.detected",
  "timestamp": "2026-03-04T12:00:00Z",
  "data": {
    // Event-specific data
  }
}
```

## Security

If you configure a `webhook_secret`, WAzion signs each webhook with an HMAC-SHA256 signature in the `X-WAzion-Signature` header.

Verify the signature in your handler:

```python
import hmac
import hashlib

def verify_webhook(payload, signature, secret):
    expected = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(signature, expected)
```

## Custom Functions (Function Calling)

Define external APIs that the AI can call during conversations:

```json
{
  "name": "update_custom_functions",
  "arguments": {
    "add_function": {
      "name": "check_order_status",
      "description": "Check the status of a customer order",
      "parameters": {
        "type": "object",
        "properties": {
          "order_id": {
            "type": "string",
            "description": "The order ID"
          }
        },
        "required": ["order_id"]
      },
      "endpoint": "https://myapi.com/orders/status",
      "method": "GET"
    }
  }
}
```

## CRM Endpoints

Integrate with your existing CRM:

```json
{
  "name": "update_crm_endpoints",
  "arguments": {
    "add_crm_endpoint": {
      "type": "sidePanel_CustomerInfo",
      "url": "https://mycrm.com/api/customer",
      "method": "GET"
    }
  }
}
```

Available CRM endpoint types:
- `sidePanel_CustomerInfo` -- Show customer info in the Chrome extension side panel
- `ai_CustomerInitialInfo` -- Provide customer context to the AI
- `sidePanel_CustomerFindToJoin` -- Search customers to link
- `search_Products` -- Search your product catalog
- `globalSearch` -- Global search across your systems

### Test a CRM Endpoint

```json
{
  "name": "test_crm_endpoint",
  "arguments": {
    "type": "sidePanel_CustomerInfo",
    "url": "https://mycrm.com/api/customer",
    "method": "GET",
    "test_phone": "+34600000000"
  }
}
```

## All Webhook/Advanced Tools

| Tool | Type | Description |
|------|------|-------------|
| `get_webhook_config` | query | View webhook configuration |
| `configure_webhooks` | mutation | Set up webhooks (requires confirmation) |
| `test_webhook` | mutation | Send a test event |
| `update_custom_functions` | mutation | Add/remove AI custom functions |
| `update_crm_endpoints` | mutation | Add/remove CRM endpoints |
| `test_crm_endpoint` | mutation | Test a CRM endpoint |

## Gotchas

- Always call `get_webhook_config` before modifying webhook settings.
- The `configure_webhooks` tool requires confirmation (two calls).
- Webhook secret is optional but strongly recommended for production.
- Custom functions follow the OpenAI function calling format.
- CRM endpoint types must be one of the 5 predefined values.
- WAzion waits up to 180 seconds for your webhook endpoint to respond before timing out.
