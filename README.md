# WAzion API

Public API documentation for [WAzion](https://www.wazion.com) -- the WhatsApp Business automation and AI assistant platform.

WAzion exposes **244 tools** via the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) over JSON-RPC 2.0, covering:

- WhatsApp messaging, sessions, and templates
- AI conversation summaries, sentiment analysis, and smart replies
- WhatsApp Auto workflows with conditions and actions
- Mass marketing campaigns with contact lists and scheduling
- CRM customer management with tags, notes, and GDPR compliance
- Knowledge base document management
- Webhooks, custom functions, and CRM endpoints
- Agent management with permissions and performance tracking
- Plugin configuration (Product Q&A, Chat Web, Doc Q&A)
- And much more

## Quick Start

### 1. Get your API token

Log in to the [WAzion Dashboard](https://www.wazion.com/dashboard) and copy your token from **Settings**.

### 2. Make your first API call

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get_shop_status",
      "arguments": {}
    },
    "id": 1
  }'
```

### 3. Send a WhatsApp message

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "send_whatsapp_message",
      "arguments": {
        "phone": "+34600000000",
        "message": "Hello from WAzion!",
        "session_id": 1
      }
    },
    "id": 1
  }'
```

## Use as MCP Server

WAzion works natively with any MCP-compatible client (Claude Desktop, Cursor, VS Code, ChatGPT, etc.).

Add to your MCP configuration:

```json
{
  "mcpServers": {
    "wazion": {
      "url": "https://www.wazion.com/api/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_TOKEN"
      }
    }
  }
}
```

## Documentation

| Document | Description |
|----------|-------------|
| [Authentication](docs/authentication.md) | How to get and use API tokens |
| [WhatsApp Messaging](docs/whatsapp-messaging.md) | Sending messages, sessions, templates, scheduling |
| [AI Capabilities](docs/ai-capabilities.md) | Summaries, sentiment, smart replies, auto-learning |
| [Workflows](docs/workflows.md) | WhatsApp Auto workflows, triggers, conditions |
| [Mass Marketing](docs/mass-marketing.md) | Campaigns, contact lists, scheduling, blacklist |
| [CRM & Customers](docs/crm-customers.md) | Customer management, tags, notes, GDPR |
| [Knowledge Base](docs/knowledge-base.md) | Document management for AI context |
| [Webhooks](docs/webhooks.md) | Webhook configuration, custom functions, CRM endpoints |
| [Error Codes](docs/errors.md) | Error codes and troubleshooting |
| [Tools Catalog](docs/tools-catalog.md) | Complete table of all 244 tools |

## Code Examples

| Language | File | Description |
|----------|------|-------------|
| curl | [send-message.sh](examples/curl/send-message.sh) | Send a WhatsApp message |
| curl | [list-conversations.sh](examples/curl/list-conversations.sh) | List recent conversations |
| Python | [send_message.py](examples/python/send_message.py) | Send message with error handling |
| Python | [ai_reply.py](examples/python/ai_reply.py) | AI summary + reply suggestions |
| Python | [workflow_create.py](examples/python/workflow_create.py) | Create a workflow |
| Node.js | [send-message.js](examples/node/send-message.js) | Send message |
| Node.js | [workflow-create.js](examples/node/workflow-create.js) | Create a workflow |
| PHP | [send_message.php](examples/php/send_message.php) | Send message |

## API Specification

The full OpenAPI 3.1 specification is available at [openapi.yaml](openapi.yaml).

## Protocol

WAzion uses **JSON-RPC 2.0** over HTTP POST (MCP Streamable HTTP transport).

| Method | Auth | Description |
|--------|------|-------------|
| `initialize` | No | MCP handshake |
| `tools/list` | Yes | List all 244 available tools |
| `tools/call` | Yes | Execute a tool |
| `resources/list` | Yes | List available resources |
| `resources/read` | Yes | Read a resource (e.g. `shop://profile`) |
| `ping` | Yes | Health check |

## License

[MIT](LICENSE)
