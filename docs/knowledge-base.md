# Knowledge Base

Upload documents (PDFs, text files) to the knowledge base so the AI assistant can reference them when answering customer questions.

## How It Works

1. Upload a document to the knowledge base
2. WAzion extracts the text content and processes it
3. The document is synced to the AI's vector store
4. The AI references the document when answering relevant questions

## Upload a Document

### curl

```bash
# Note: File upload requires multipart/form-data, which isn't possible
# through the JSON-RPC protocol directly. Use the create_knowledge_file
# tool to create text-based knowledge files.

curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAZION_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "create_knowledge_file",
      "arguments": {
        "title": "Return Policy",
        "content": "Our return policy allows returns within 30 days of purchase...",
        "description": "Customer-facing return and refund policy"
      }
    },
    "id": 1
  }'
```

### Python

```python
import requests

def create_knowledge_file(token, title, content, description=""):
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
                "name": "create_knowledge_file",
                "arguments": {
                    "title": title,
                    "content": content,
                    "description": description
                }
            },
            "id": 1
        }
    ).json()
```

## List Knowledge Files

```json
{
  "name": "list_knowledge_files",
  "arguments": {}
}
```

## Update a Knowledge File

```json
{
  "name": "update_knowledge_file",
  "arguments": {
    "file_id": 1,
    "title": "Updated Return Policy",
    "content": "New policy text..."
  }
}
```

## Toggle File Active/Inactive

Deactivate a file without deleting it (the AI will stop using it):

```json
{
  "name": "toggle_knowledge_file",
  "arguments": {
    "file_id": 1,
    "is_active": false
  }
}
```

## Delete a Knowledge File

```json
{
  "name": "delete_knowledge_file",
  "arguments": {
    "file_id": 1
  }
}
```

System files cannot be deleted.

## Storage Status

Check your storage usage and quota:

```json
{
  "name": "get_storage_status",
  "arguments": {}
}
```

## Force Sync

Manually trigger synchronization of learned facts to the vector store:

```json
{
  "name": "sync_knowledge_now",
  "arguments": {}
}
```

## All Knowledge Base Tools

| Tool | Type | Description |
|------|------|-------------|
| `list_knowledge_files` | query | List all knowledge files |
| `create_knowledge_file` | mutation | Create from text content |
| `upload_knowledge_file` | mutation | Upload a file (PDF, doc) |
| `update_knowledge_file` | mutation | Update title/content |
| `delete_knowledge_file` | mutation | Delete a file |
| `toggle_knowledge_file` | mutation | Activate/deactivate |
| `download_knowledge_file` | query | Get download URL |
| `get_knowledge_processing_status` | query | Check processing status |
| `get_storage_status` | query | Storage usage and quota |
| `list_storage_files` | query | List files with sizes |
| `sync_knowledge_now` | mutation | Force vector store sync |

## Gotchas

- File processing takes a few seconds to minutes depending on size. Check status with `get_knowledge_processing_status`.
- Each shop has a storage quota (default 1GB). Check with `get_storage_status`.
- System files (auto-generated) cannot be deleted.
- The `create_knowledge_file` tool creates files from text content. For uploading binary files (PDF), use `upload_knowledge_file`.
