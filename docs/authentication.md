# Authentication

The WAzion API uses **Bearer token** authentication. Every request (except `initialize`) must include your API token in the `Authorization` header.

## Getting Your Token

1. Log in to the [WAzion Dashboard](https://www.wazion.com/dashboard)
2. Go to **Settings**
3. Copy your **API Token** (labeled `token_ext`)

Your token is generated automatically when you create a WAzion account. It does not expire, but you can regenerate it from the dashboard if needed.

## Using the Token

Include the token in every API request:

```
Authorization: Bearer YOUR_TOKEN_HERE
```

## Examples

### curl

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer wz_abc123..." \
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

### Python

```python
import requests

TOKEN = "wz_abc123..."
URL = "https://www.wazion.com/api/mcp/"

response = requests.post(
    URL,
    headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {TOKEN}"
    },
    json={
        "jsonrpc": "2.0",
        "method": "tools/call",
        "params": {
            "name": "get_shop_status",
            "arguments": {}
        },
        "id": 1
    }
)
print(response.json())
```

## Error Responses

If the token is missing or invalid, the server returns:

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32000,
    "message": "Unauthorized: invalid or missing Bearer token. Get your token at https://www.wazion.com/dashboard → Settings."
  },
  "id": 1
}
```

## MCP Client Configuration

When using WAzion as an MCP server in tools like Claude Desktop, Cursor, or VS Code, configure the server URL and token in your MCP settings:

```json
{
  "mcpServers": {
    "wazion": {
      "url": "https://www.wazion.com/api/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_TOKEN_HERE"
      }
    }
  }
}
```

## Security Notes

- Keep your token secret. Do not commit it to version control.
- Use environment variables to store the token in production.
- Each token is scoped to a single shop. You cannot access other shops' data.
- All data is isolated per shop (multi-tenant).
