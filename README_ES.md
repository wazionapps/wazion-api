# WAzion API

Documentacion publica de la API de [WAzion](https://www.wazion.com) -- la plataforma de automatizacion de WhatsApp Business con asistente IA.

WAzion expone **244 herramientas** mediante el [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) sobre JSON-RPC 2.0, cubriendo:

- Mensajeria WhatsApp, sesiones y plantillas
- Resumenes de conversaciones con IA, analisis de sentimiento y respuestas inteligentes
- Workflows automaticos de WhatsApp con condiciones y acciones
- Campanas de marketing masivo con listas de contactos y programacion
- Gestion CRM de clientes con etiquetas, notas y cumplimiento GDPR
- Gestion de documentos de base de conocimiento
- Webhooks, funciones personalizadas y endpoints CRM
- Gestion de agentes con permisos y seguimiento de rendimiento
- Configuracion de plugins (Product Q&A, Chat Web, Doc Q&A)
- Y mucho mas

## Inicio Rapido

### 1. Obtener tu token API

Inicia sesion en el [Dashboard de WAzion](https://www.wazion.com/dashboard) y copia tu token desde **Configuracion**.

### 2. Haz tu primera llamada

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TU_TOKEN" \
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

### 3. Enviar un mensaje de WhatsApp

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TU_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "send_whatsapp_message",
      "arguments": {
        "phone": "+34600000000",
        "message": "Hola desde WAzion!",
        "session_id": 1
      }
    },
    "id": 1
  }'
```

## Usar como servidor MCP

WAzion funciona nativamente con cualquier cliente compatible con MCP (Claude Desktop, Cursor, VS Code, ChatGPT, etc.).

Anade a tu configuracion MCP:

```json
{
  "mcpServers": {
    "wazion": {
      "url": "https://www.wazion.com/api/mcp/",
      "headers": {
        "Authorization": "Bearer TU_TOKEN"
      }
    }
  }
}
```

## Documentacion

| Documento | Descripcion |
|-----------|-------------|
| [Autenticacion](docs/authentication.md) | Como obtener y usar tokens API |
| [Mensajeria WhatsApp](docs/whatsapp-messaging.md) | Envio de mensajes, sesiones, plantillas, programacion |
| [Capacidades IA](docs/ai-capabilities.md) | Resumenes, sentimiento, respuestas inteligentes, auto-aprendizaje |
| [Workflows](docs/workflows.md) | Workflows de WhatsApp Auto, triggers, condiciones |
| [Marketing Masivo](docs/mass-marketing.md) | Campanas, listas de contactos, programacion, lista negra |
| [CRM y Clientes](docs/crm-customers.md) | Gestion de clientes, etiquetas, notas, GDPR |
| [Base de Conocimiento](docs/knowledge-base.md) | Gestion de documentos para contexto de la IA |
| [Webhooks](docs/webhooks.md) | Configuracion de webhooks, funciones personalizadas, endpoints CRM |
| [Codigos de Error](docs/errors.md) | Codigos de error y resolucion de problemas |
| [Catalogo de Herramientas](docs/tools-catalog.md) | Tabla completa de las 244 herramientas |

## Ejemplos de Codigo

| Lenguaje | Archivo | Descripcion |
|----------|---------|-------------|
| curl | [send-message.sh](examples/curl/send-message.sh) | Enviar un mensaje de WhatsApp |
| curl | [list-conversations.sh](examples/curl/list-conversations.sh) | Listar conversaciones recientes |
| Python | [send_message.py](examples/python/send_message.py) | Enviar mensaje con manejo de errores |
| Python | [ai_reply.py](examples/python/ai_reply.py) | Resumen IA + sugerencias de respuesta |
| Python | [workflow_create.py](examples/python/workflow_create.py) | Crear un workflow |
| Node.js | [send-message.js](examples/node/send-message.js) | Enviar mensaje |
| Node.js | [workflow-create.js](examples/node/workflow-create.js) | Crear un workflow |
| PHP | [send_message.php](examples/php/send_message.php) | Enviar mensaje |

## Especificacion API

La especificacion completa OpenAPI 3.1 esta disponible en [openapi.yaml](openapi.yaml).

## Protocolo

WAzion usa **JSON-RPC 2.0** sobre HTTP POST (transporte MCP Streamable HTTP).

| Metodo | Auth | Descripcion |
|--------|------|-------------|
| `initialize` | No | Handshake MCP |
| `tools/list` | Si | Listar las 244 herramientas disponibles |
| `tools/call` | Si | Ejecutar una herramienta |
| `resources/list` | Si | Listar recursos disponibles |
| `resources/read` | Si | Leer un recurso (ej: `shop://profile`) |
| `ping` | Si | Health check |

## Licencia

[MIT](LICENSE)
