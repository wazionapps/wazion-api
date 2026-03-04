# Error Codes & Troubleshooting

## JSON-RPC Error Codes

| Code | Name | Description |
|------|------|-------------|
| `-32700` | Parse error | Invalid JSON in the request body |
| `-32601` | Method not found | Unknown JSON-RPC method |
| `-32602` | Invalid params | Missing or invalid parameters |
| `-32000` | Unauthorized | Invalid or missing Bearer token |

### Example: Parse Error

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32700,
    "message": "Parse error: invalid JSON"
  },
  "id": null
}
```

### Example: Unauthorized

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

### Example: Method Not Found

```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32601,
    "message": "Method not found: tools/invalid"
  },
  "id": 1
}
```

## Tool-Level Errors

When a tool call fails, the response uses the standard MCP tool result format with `isError: true`:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Error: phone is required"
      }
    ],
    "isError": true
  },
  "id": 1
}
```

### Common Tool Errors

| Error Message | Cause | Solution |
|--------------|-------|----------|
| `tool 'xyz' no encontrado` | Tool name does not exist | Check `tools/list` for available tools |
| `phone is required` | Missing required phone parameter | Include `phone` in arguments |
| `No credits available` | Insufficient credits | Purchase credits from the dashboard |
| `Session not connected` | WhatsApp session is disconnected | Reconnect the session |
| `Shopify not connected` | Shopify integration not configured | Connect Shopify first |
| `Agent limit reached` | Maximum agents for your plan | Remove an agent or upgrade plan |

## Confirmation-Required Actions

Some destructive actions return a warning on the first call:

```json
{
  "jsonrpc": "2.0",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "⚠️ CONFIRMACION REQUERIDA: Eliminar agente\nEsta accion no se puede deshacer\n\nPara ejecutar, llama de nuevo con confirm: true"
      }
    ]
  },
  "id": 1
}
```

To proceed, call the same tool again with `"confirm": true` in the arguments.

## Response Truncation

If a tool returns more than 50,000 characters, the response is truncated:

```
⚠️ [TRUNCADO] La respuesta original tenia 75,000 caracteres. Usa parametros de filtro (period, limit, days, etc.) para reducir los datos.
```

Solution: Use filtering parameters like `limit`, `period`, `days`, `date_from`, `date_to` to reduce the result set.

## HTTP Status Codes

| Status | Meaning |
|--------|---------|
| `200` | Success (check JSON-RPC response for errors) |
| `202` | Notification acknowledged (no body) |
| `204` | OPTIONS preflight response |
| `405` | Method not allowed (use POST) |

## Troubleshooting

### "Unauthorized" even with a valid token

- Ensure the `Authorization` header is formatted as `Bearer YOUR_TOKEN` (with a space)
- Check that the token has not been regenerated from the dashboard
- The token is case-sensitive

### Tool call times out

- Some operations (AI analysis, smart follow-up) can take up to 5 minutes
- The server has a 300-second timeout
- If you get a timeout, the operation may still complete server-side

### Empty response or 202

- You sent a notification (request without `id` field)
- Add an `id` field to your request to get a response

### "SSE streaming not supported"

- You made a GET request instead of POST
- The WAzion MCP server only supports the Streamable HTTP transport (POST)

### Batch requests

- Send an array of JSON-RPC requests for batch processing
- Each request in the batch is processed independently
- Notifications in a batch do not generate responses
