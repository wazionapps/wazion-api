# AI Capabilities

WAzion includes a powerful AI assistant that can summarize conversations, analyze sentiment, generate smart replies, auto-tag customers, and more.

## AI Summary

Generate a summary of any conversation:

### curl

```bash
curl -X POST https://www.wazion.com/api/mcp/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAZION_TOKEN" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get_ai_summary",
      "arguments": {
        "phone": "+34600000000",
        "summary_type": "detailed"
      }
    },
    "id": 1
  }'
```

### Python

```python
import requests

def get_ai_summary(token, phone, summary_type="quick"):
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
                "name": "get_ai_summary",
                "arguments": {
                    "phone": phone,
                    "summary_type": summary_type
                }
            },
            "id": 1
        }
    ).json()

# Quick summary
result = get_ai_summary("wz_abc...", "+34600000000", "quick")

# Detailed summary
result = get_ai_summary("wz_abc...", "+34600000000", "detailed")
```

**Summary types:**
- `quick` -- Brief one-paragraph summary
- `detailed` -- Full analysis with key points
- `action_items` -- Focused on next steps

## Sentiment Analysis

Analyze the emotional tone and intent of a conversation:

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_sentiment_analysis",
    "arguments": {
      "phone": "+34600000000"
    }
  }
}
```

Returns:
- **Score** (0-10): Overall sentiment
- **Category**: `positive`, `neutral`, `tension`, `negative`
- **Intent**: What the customer wants
- **Urgency** (0-10): How urgent the matter is
- **Tip**: Suggested approach for responding

### Sentiment Trend

Track how sentiment evolves over time:

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_sentiment_trend",
    "arguments": {
      "phone": "+34600000000",
      "days": 30
    }
  }
}
```

Without a `phone`, returns trends across all conversations.

## Smart Reply Suggestions

Get AI-generated response suggestions based on the conversation context:

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_smart_reply_suggestions",
    "arguments": {
      "phone": "+34600000000",
      "tone": "friendly"
    }
  }
}
```

Returns 3 suggested replies with different approaches.

## Auto-Tag Customer

Let AI suggest relevant tags for a customer based on their conversation:

```json
{
  "method": "tools/call",
  "params": {
    "name": "auto_tag_customer",
    "arguments": {
      "phone": "+34600000000"
    }
  }
}
```

## Auto-Categorize Conversations

Batch categorize recent conversations by topic, intent, and priority:

```json
{
  "method": "tools/call",
  "params": {
    "name": "auto_categorize_conversations",
    "arguments": {
      "hours": 24,
      "limit": 50
    }
  }
}
```

## Translate Conversation

Translate the last messages of a conversation to another language:

```json
{
  "method": "tools/call",
  "params": {
    "name": "translate_conversation",
    "arguments": {
      "phone": "+34600000000",
      "target_language": "en",
      "last_n": 20
    }
  }
}
```

## Prompt Management

Configure the AI personality and instructions:

| Tool | Description |
|------|-------------|
| `get_prompt` | View the current AI prompt |
| `save_prompt` | Update the AI prompt (requires confirmation) |
| `get_prompt_history` | View previous prompt versions |
| `rollback_prompt` | Revert to a previous version |
| `improve_prompt` | AI-powered prompt analysis with scores |
| `apply_prompt_instruction` | Generate modified prompt from an instruction |
| `restore_default_prompt` | Get the default prompt |

## Auto-Learning

The AI can learn from conversations automatically:

| Tool | Description |
|------|-------------|
| `toggle_autolearning` | Enable/disable auto-learning |
| `list_knowledge_snippets` | View learned facts |
| `update_knowledge_snippet` | Approve, reject, or edit a fact |
| `smart_knowledge_update` | Update facts based on new information |
| `get_autolearning_stats` | Statistics about learned knowledge |
| `get_autolearning_metrics` | Performance metrics |
| `sync_knowledge_now` | Force sync to Vector Store |

## Web Search

Enable the AI to search the internet when needed:

```json
{
  "method": "tools/call",
  "params": {
    "name": "toggle_web_search",
    "arguments": {
      "enable_web_search": true
    }
  }
}
```

## Image and Media Analysis

Enable automatic analysis of images, PDFs, and audio messages:

```json
{
  "method": "tools/call",
  "params": {
    "name": "toggle_auto_describe_images",
    "arguments": {
      "auto_describe_images": true
    }
  }
}
```

## All AI Analysis Tools

| Tool | Description |
|------|-------------|
| `get_ai_summary` | Summarize a conversation |
| `get_sentiment_analysis` | Analyze sentiment and intent |
| `get_sentiment_trend` | Track sentiment over time |
| `get_smart_reply_suggestions` | Generate reply suggestions |
| `auto_tag_customer` | Suggest tags for a customer |
| `auto_categorize_conversations` | Categorize conversations by topic |
| `translate_conversation` | Translate conversation messages |

## Gotchas

- AI operations consume credits. Check balance with `get_credits_info`.
- The `summary_type` parameter accepts `quick`, `detailed`, or `action_items`.
- Sentiment analysis returns a score from 0 (very negative) to 10 (very positive).
- Auto-learning improvements can be reviewed and reverted from the prompt history.
