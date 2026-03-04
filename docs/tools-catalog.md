---
sidebar_position: 10
---
# Tools Catalog

Complete reference of all 244 WAzion API tools organized by category.

## Summary

| Category | Tools | Description |
|----------|-------|-------------|
| Configuracion General | 13 | Ajustes basicos del dashboard |
| Cuenta | 3 | Datos de cuenta y facturacion |
| Agentes | 11 | Gestion de agentes de atencion |
| Integraciones | 5 | Conexiones con servicios externos |
| Prompt e IA | 12 | Configuracion del asistente IA |
| Plugins | 18 | Plugins y extensiones |
| Avanzado | 8 | Webhooks, funciones personalizadas, CRM, API key |
| Estadisticas | 15 | Metricas y analytics |
| Almacenamiento | 12 | Gestion de archivos y almacenamiento |
| Soporte | 1 | Contacto con soporte tecnico |
| Automatizacion | 16 | WhatsApp Auto y workflows de automatizacion |
| Marketing Masivo | 39 | Campanas masivas por WhatsApp, listas de contactos y configuracion de envios |
| Seguimiento Inteligente | 6 | Analisis automatico de conversaciones para detectar intencion de compra y enviar seguimientos personalizados |
| Conversaciones | 9 | Buscar, ver y analizar conversaciones con clientes |
| Clientes | 13 | Informacion de clientes, comentarios, tags y busqueda |
| Tareas | 6 | Gestion de tareas y recordatorios asociados a clientes |
| Calendario | 4 | Eventos y citas programadas |
| Actividad | 8 | Resumenes de actividad, tendencias y metricas operativas |
| Productos | 2 | Busqueda de productos y estadisticas de consultas |
| WhatsApp | 27 | Estado de sesiones, logs de mensajes y ejecucion de workflows |
| Analisis IA | 7 | Resumenes y analisis de sentimiento con inteligencia artificial |
| Notificaciones | 5 | Gestion de notificaciones del sistema |
| Base de Conocimiento | 3 | Gestión de archivos y documentos de la base de conocimiento |
| Referidos | 3 | Programa de referidos - genera enlaces y consulta ganancias |

---

## Configuracion General

Ajustes basicos del dashboard

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_shop_status` | query | Obtiene el estado actual de la tienda: idioma, creditos, configuracion basica | -- |
| `update_language` | mutation | Cambia el idioma del dashboard y las respuestas de la IA | language |
| `update_timezone` | mutation | Cambia la zona horaria para mostrar fechas y horas correctamente | timezone_pref |
| `update_date_format` | mutation | Cambia el formato en que se muestran las fechas | dateformat_pref |
| `toggle_auto_translate` | mutation | Activa o desactiva la traduccion automatica de mensajes | translateallways |
| `update_store_url` | mutation | Actualiza la URL de tu tienda online | url_tienda |
| `update_business_info` | mutation | Actualiza el tipo de negocio, tipo de venta y descripcion del negocio | business_type, sale_type, business_description |
| `update_customer_tags` | mutation | Configura las etiquetas para clasificar clientes | add_tag, remove_tag |
| `update_order_settings` | mutation | Configura prefijos de pedidos y telefonos/emails a ignorar | order_prefix, order_suffix, add_ignore_phone, remove_ignore_phone, +4 more |
| `get_onboarding_status` | query | Muestra el progreso de configuracion inicial del usuario (setup guide) | -- |
| `toggle_auto_describe_images` | mutation | Activa o desactiva el analisis automatico de imagenes, documentos PDF y audios e | auto_describe_images |
| `search_ai_rerank` | query | Reordena resultados de busqueda del dashboard usando IA cuando la busqueda difus | query, items, lang |
| `get_search_index` | query | Genera y devuelve el indice de contenido buscable del dashboard (paginas, tarjet | lang, refresh |

## Cuenta

Datos de cuenta y facturacion

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `update_contact_info` | mutation | Actualiza nombre, email y telefono de la cuenta | client_name, client_email, client_phone, billing_name, +7 more |
| `get_purchase_history` | query | Muestra el historial de compras de creditos | page, limit |
| `update_billing_info` | mutation | Actualiza los datos de facturacion para las facturas | billing_name, billing_tax_id, billing_address, billing_address2, +7 more |

## Agentes

Gestion de agentes de atencion

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `list_agents` | query | Muestra todos los agentes de atencion configurados con sus nombres y colores | -- |
| `create_agent` | mutation | Crea un nuevo agente de atencion | nickname, full_name, email, color, +2 more |
| `update_agent` | mutation | Modifica los datos de un agente existente | id, nickname, full_name, email, +4 more |
| `delete_agent` | mutation | Elimina un agente de atencion | id |
| `get_agent_permissions` | query | Obtiene los permisos configurados de un agente y el registro completo de permiso | id |
| `save_agent_permissions` | mutation | Actualiza los permisos de un agente | id, permissions |
| `list_whatsapp_agents` | query | Muestra todos los agentes disponibles para asignar en workflows de WhatsApp | -- |
| `get_agent_activity` | query | Muestra la actividad y carga de trabajo de un agente especifico | agent_id, period, days |
| `get_team_summary` | query | Vista general de todos los agentes con su carga de trabajo actual | agent_id, period, days |
| `get_agent_stats` | query | Metricas de rendimiento del equipo: mensajes enviados, recibidos, tareas complet | period, agent_id, days |
| `get_agent_performance` | query | Metricas detalladas de rendimiento de un agente: clientes asignados, tareas, tas | agent_id, days, period |

## Integraciones

Conexiones con servicios externos

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `connect_shopify` | mutation | Conecta tu tienda Shopify para buscar productos, pedidos y clientes | shopify_url, shopify_token |
| `test_shopify_connection` | query | Verifica que la conexion con Shopify funciona correctamente | shopify_url, shopify_token |
| `verify_shopify_write_permission` | query | Verifica si la conexion de Shopify tiene el permiso write_products necesario par | -- |
| `configure_shopify_locales` | mutation | Configura como se manejan los idiomas y URLs de Shopify | shopify_connected, shopify_locale_mode, shopify_fixed_locale, shopify_content_locale_mode, +2 more |
| `disconnect_shopify` | mutation | Desconecta la integracion con Shopify | shopify_connected, shopify_url, shopify_token |

## Prompt e IA

Configuracion del asistente IA

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `toggle_autolearning` | mutation | Activa o desactiva el aprendizaje automatico de la IA | autolearning_enabled |
| `toggle_web_search` | mutation | Activa o desactiva la busqueda en internet de la IA | enable_web_search |
| `get_prompt` | query | Muestra el prompt actual de la IA | -- |
| `get_prompt_history` | query | Muestra las versiones anteriores del prompt | -- |
| `save_prompt` | mutation | Guarda un nuevo prompt para la IA | prompt, enable_web_search |
| `improve_prompt` | query | Analiza el prompt actual con IA y devuelve puntuaciones por categoria, sugerenci | prompt |
| `apply_prompt_instruction` | query | Genera una version modificada del prompt segun una instruccion | prompt, instruction |
| `restore_default_prompt` | query | Obtiene el prompt por defecto segun el idioma | -- |
| `rollback_prompt` | mutation | Revierte la parte autogenerada del prompt a una version anterior del historial | version_id |
| `list_knowledge_snippets` | query | Muestra los datos (facts) que la IA ha aprendido automaticamente de las conversa | filter, category, search, limit, +1 more |
| `update_knowledge_snippet` | mutation | Permite aprobar, rechazar, editar o eliminar un dato aprendido | id, action, content, category, +1 more |
| `smart_knowledge_update` | mutation | Busca y actualiza datos aprendidos que contradigan o estén desactualizados según | instruction, confirm, selected_ids, changes |

## Plugins

Plugins y extensiones

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `configure_plugin_chat` | mutation | Configura el widget de chat web | plugin_type, is_enabled, allowed_domains, config_design, +15 more |
| `configure_plugin_productqa` | mutation | Activa y configura el widget de preguntas sobre productos | plugin_type, is_enabled, allowed_domains, faq_enabled, +1 more |
| `regenerate_plugin_token` | mutation | Genera un nuevo token para los plugins (invalida el anterior) | plugin_type |
| `list_docqa_assistants` | query | Muestra todos los asistentes de documentacion creados con el plugin Doc Q&A | -- |
| `create_docqa_assistant` | mutation | Crea un nuevo asistente de documentacion | display_name, prompt, is_enabled, language_mode, +3 more |
| `update_docqa_assistant` | mutation | Modifica la configuracion de un asistente de documentacion existente | assistant_id, display_name, prompt, is_enabled, +4 more |
| `publish_question_as_faq` | mutation | Publica manualmente una pregunta del historial como FAQ en Shopify | question_id |
| `get_product_qa_faqs` | query | Lista las FAQs publicadas del plugin Product Q&A, agrupadas por producto | status, product_id, page, limit |
| `manage_faq` | mutation | Permite despublicar, republicar o eliminar FAQs del plugin Product Q&A | faq_ids, action |
| `get_plugin_embed_code` | query | Genera el codigo de instalacion (embed code) para un plugin | plugin_type |
| `get_recent_plugin_questions` | query | Muestra las ultimas preguntas que los clientes hicieron al plugin de Product Q&A | hours, limit, plugin_type, period |
| `get_unanswered_plugin_questions` | query | Identifica preguntas donde el bot no pudo dar una respuesta satisfactoria | limit, plugin_type, period, hours |
| `get_plugin_stats` | query | Metricas del plugin Product Q&A: preguntas, visitantes, productos mas consultado | period, plugin_type, limit, hours |
| `list_plugin_configs` | query | Lista todos los plugins instalados con su configuracion y estado | plugin_type, hours, limit, period |
| `get_chat_sessions` | query | Lista las sesiones recientes del widget de chat web | hours, limit, plugin_type, period |
| `get_plugin_conversation_detail` | query | Muestra los mensajes completos de una conversacion del plugin de chat web | session_id |
| `save_plugin_conversation_note` | mutation | Genera un resumen IA de una conversacion del plugin de chat web y lo guarda como | session_id |
| `check_plugin_conversation_note` | query | Comprueba si ya existe una nota guardada para una sesion de chat del plugin y mu | session_id |

## Avanzado

Webhooks, funciones personalizadas, CRM

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_webhook_config` | query | Lee la configuracion actual de webhooks de la tienda: si estan activados, URL co | -- |
| `configure_webhooks` | mutation | Modifica la configuracion de webhooks | webhook_enabled, webhook_url, webhook_secret, webhook_events |
| `test_webhook` | mutation | Envia un webhook de prueba | webhook_url, webhook_secret |
| `update_custom_functions` | mutation | Define APIs que la IA puede llamar durante conversaciones | add_function, remove_function |
| `update_crm_endpoints` | mutation | Define endpoints para sincronizar datos con tu CRM | add_crm_endpoint, remove_crm_endpoint |
| `test_crm_endpoint` | mutation | Envia una peticion de prueba a un endpoint CRM para verificar que funciona corre | type, url, method, auth, +1 more |
| `regenerate_api_key` | mutation | Genera una nueva API key (token_ext) para la tienda | confirmation |
| `get_api_key` | query | Muestra la API key actual de la tienda (token_ext) y la URL del servidor MCP | -- |

## Estadisticas

Metricas y analytics

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_usage_stats` | query | Muestra el uso de creditos, tokens y costes de los ultimos dias | action, from, to, page, +1 more |
| `get_analytics` | query | Muestra metricas de rendimiento: conversaciones, mensajes, actividad diaria | period |
| `toggle_analytics` | mutation | Activa o desactiva el registro de analytics con structured outputs para esta tie | enable_structured_outputs |
| `get_docqa_stats` | query | Muestra estadisticas detalladas de un asistente de documentacion | assistant_id, days |
| `get_chat_plugin_stats` | query | Muestra estadisticas de uso del plugin de chat web: conversaciones, mensajes, se | -- |
| `get_autolearning_metrics` | query | Muestra las metricas del sistema de aprendizaje automatico | -- |
| `get_plugin_conversations` | query | Muestra las conversaciones del plugin de chat web | limit, period, date_from, date_to, +1 more |
| `get_product_qa_stats` | query | Muestra estadisticas del plugin de preguntas sobre productos | -- |
| `get_product_qa_questions` | query | Muestra las preguntas sobre productos | limit, period, date_from, date_to, +1 more |
| `get_credits_info` | query | Muestra informacion detallada sobre los creditos disponibles: gratuitos, comprad | -- |
| `get_whatsapp_workflow_stats` | query | Get WhatsApp message volume, workflow execution stats, peak hours, and performan | period |
| `get_mass_marketing_stats` | query | Estadisticas de campanas masivas: rendimiento por campana, desglose de fallos, d | date_from, date_to |
| `get_autolearning_stats` | query | Obtiene estadisticas detalladas del sistema de auto-learning: snippets activos,  | -- |
| `get_usage_stats_detail` | query | Muestra el detalle individual de cada consulta de IA con tokens y costes | from, to, page, limit |
| `get_structured_analytics` | query | Obtiene analytics detallados de conversaciones usando structured outputs: KPIs,  | date_from, date_to, limit |

## Almacenamiento

Gestion de archivos y almacenamiento

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_storage_status` | query | Muestra el uso actual de almacenamiento y el plan activo | -- |
| `list_storage_files` | query | Muestra la lista de archivos subidos a la base de conocimiento con su tamano y f | limit |
| `list_knowledge_files` | query | Muestra todos los archivos subidos a la base de conocimiento (PDFs, documentos,  | -- |
| `delete_knowledge_file` | mutation | Elimina un archivo de la base de conocimiento (no permite eliminar archivos de s | file_id |
| `toggle_knowledge_file` | mutation | Activa o pausa un archivo sin eliminarlo (la IA solo usa archivos activos) | file_id, is_active |
| `create_knowledge_file` | mutation | Crea un nuevo archivo en la base de conocimiento a partir de contenido de texto | title, content, description, filename |
| `sync_knowledge_now` | mutation | Fuerza la sincronizacion inmediata de los facts aprendidos al Vector Store (norm | -- |
| `update_knowledge_file` | mutation | Cambia el titulo, descripcion y/o contenido de un archivo de conocimiento | file_id, title, description, content |
| `list_conversation_files` | query | Lista los archivos compartidos en una conversacion con un cliente | phone, limit, offset |
| `delete_conversation_file` | mutation | Elimina un archivo compartido en una conversacion | file_uuid, agent_id |
| `download_conversation_file` | query | Obtiene la URL de descarga de un archivo compartido en una conversacion | file_uuid |
| `upload_conversation_file` | mutation | Sube un archivo a una conversación con un cliente | file, phone, agent_id |

## Soporte

Contacto con soporte tecnico

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `send_support_ticket` | mutation | Envia un mensaje al equipo de soporte de WAzion | type, subject, message |

## Automatizacion

WhatsApp Auto y workflows de automatizacion

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `list_whatsapp_workflows` | query | Obtiene la lista de todos los workflows de automatizacion de WhatsApp | -- |
| `create_whatsapp_workflow` | mutation | Crea un nuevo workflow de automatizacion para respuestas de WhatsApp | name, trigger_type, conditions, actions, +2 more |
| `toggle_whatsapp_workflow` | mutation | Activa o pausa un workflow de WhatsApp existente | id, enabled |
| `delete_whatsapp_workflow` | mutation | Elimina permanentemente un workflow de WhatsApp | id |
| `get_whatsapp_conversation_history` | query | Muestra el historial de mensajes de WhatsApp con un telefono especifico | phone, limit |
| `get_whatsapp_workflow_logs` | query | Obtiene el historial de ejecuciones de workflows de WhatsApp Auto con filtros de | limit, offset, period, from, +1 more |
| `disconnect_whatsapp` | mutation | Desconecta una sesion de WhatsApp y elimina los datos de autenticacion | session_id |
| `reconnect_whatsapp` | mutation | Intenta reconectar una sesion de WhatsApp existente (puede requerir escanear QR  | session_id |
| `update_whatsapp_workflow` | mutation | Modifica un workflow existente | id, name, trigger_type, conditions, +3 more |
| `update_whatsapp_session` | mutation | Actualiza la etiqueta (nombre) de una sesion de WhatsApp conectada | session_id, label |
| `get_whatsapp_qr` | query | Obtiene el codigo QR de WhatsApp para que el usuario lo escanee y conecte su cue | -- |
| `reorder_whatsapp_workflows` | mutation | Cambia el orden de ejecucion de los workflows de WhatsApp | order |
| `bulk_toggle_workflows` | mutation | Activa o desactiva multiples workflows a la vez | workflow_ids, enabled |
| `bulk_delete_workflows` | mutation | Elimina multiples workflows de WhatsApp a la vez | workflow_ids |
| `dry_run_workflow` | query | Simula la ejecucion de un workflow con un mensaje de prueba sin enviar nada | workflow_id, test_message, test_phone |
| `get_workflow_session_stats` | query | Obtiene estadísticas de workflows para una sesión específica de WhatsApp: mensaj | session_id |

## Marketing Masivo

Campanas masivas por WhatsApp, listas de contactos y configuracion de envios

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_mass_marketing_config` | query | Obtiene la configuracion actual de marketing masivo: auto-respuesta, traduccion  | -- |
| `save_mass_marketing_config` | mutation | Guarda la configuracion de marketing masivo: auto-respuesta, traduccion y opcion | auto_reply_enabled, auto_reply_text, auto_reply_translate, auto_reply_unsubscribe, +2 more |
| `list_contact_lists` | query | Obtiene todas las listas de contactos de marketing masivo de la tienda | -- |
| `create_contact_list` | mutation | Crea una nueva lista de contactos para campanas de marketing masivo | name, description |
| `delete_contact_list` | mutation | Elimina una lista de contactos y todos sus contactos asociados | list_id |
| `list_campaigns` | query | Obtiene todas las campanas de marketing masivo de la tienda | -- |
| `create_campaign` | mutation | Crea una nueva campana de marketing masivo | name, message_text, list_id, send_interval_seconds, +11 more |
| `start_campaign` | mutation | Inicia el envio de una campana de marketing masivo | campaign_id |
| `pause_campaign` | mutation | Pausa temporalmente una campana de marketing masivo en curso | campaign_id |
| `resume_campaign` | mutation | Reanuda una campana de marketing masivo que fue pausada | campaign_id |
| `cancel_campaign` | mutation | Cancela definitivamente una campana de marketing masivo (en curso, pausada, borr | campaign_id |
| `get_campaign_logs` | query | Obtiene el progreso y logs de envio de una campana especifica | campaign_id, page, limit |
| `get_unsubscribed_list` | query | Obtiene la lista de contactos que se han dado de baja de los envios masivos de l | -- |
| `cancel_campaign_schedule` | mutation | Cancela la programacion de una campana programada, cambiandola a estado borrador | campaign_id |
| `count_filtered_contacts` | query | Cuenta cuantos contactos de una lista cumplen con filtros de segmentacion (tags, | list_id, segment_filters |
| `list_blacklist` | query | Obtiene los numeros bloqueados manualmente que no recibiran campanas masivas, di | search, page |
| `add_to_blacklist` | mutation | Bloquea un numero de telefono para que no reciba campanas de marketing masivo | phone, reason |
| `remove_from_blacklist` | mutation | Desbloquea un numero de telefono de la lista negra de marketing masivo | phone |
| `export_campaign_csv` | query | Descarga los logs de envio de una campana completada como archivo CSV | campaign_id |
| `import_marketing_contacts` | mutation | Importa contactos a una lista de marketing masivo | source, list_id, phones_text, phones, +3 more |
| `bulk_add_to_blacklist` | mutation | Añade varios números de teléfono a la lista negra de marketing masivo de una vez | phones, reason |
| `get_campaign` | query | Obtiene los detalles completos de una campaña de marketing masivo | campaign_id |
| `update_campaign` | mutation | Modifica los datos de una campaña de marketing masivo existente (solo en estado  | campaign_id, name, list_id, message_text, +12 more |
| `delete_campaign` | mutation | Elimina permanentemente una campaña de marketing masivo | campaign_id |
| `duplicate_campaign` | mutation | Crea una copia de una campaña existente en estado borrador | campaign_id |
| `archive_campaign` | mutation | Archiva una campaña completada para mantener la lista limpia | campaign_id |
| `unarchive_campaign` | mutation | Restaura una campaña archivada a la lista principal | campaign_id |
| `approve_campaign` | mutation | Aprueba una campaña pendiente de aprobación para que pueda ser enviada | campaign_id |
| `get_contact_list_detail` | query | Obtiene los contactos de una lista específica con paginación y búsqueda | list_id, page, search |
| `add_contacts_to_list` | mutation | Añade uno o más contactos a una lista de marketing | list_id, contacts |
| `remove_contact_from_list` | mutation | Elimina un contacto individual de una lista de marketing | contact_id |
| `remove_contacts_bulk` | mutation | Elimina múltiples contactos de una lista de marketing | list_id, contact_ids, select_all, exclude_ids, +1 more |
| `get_marketing_sessions` | query | Obtiene las sesiones de WhatsApp disponibles para envío de campañas | -- |
| `assign_marketing_session` | mutation | Habilita o deshabilita una sesión de WhatsApp para envío de campañas de marketin | session_id, enable_mass_marketing |
| `remove_unsubscribed_bulk` | mutation | Elimina registros de bajas de marketing masivo | ids, select_all |
| `create_list_from_inactive` | mutation | Crea una nueva lista de contactos a partir de clientes que no han tenido convers | days, name |
| `create_list_from_followup` | mutation | Crea una lista de contactos desde conversaciones detectadas por Smart Follow-up | name, period |
| `import_contacts_manual` | mutation | Importa contactos a una lista de marketing masivo escribiendo los telefonos | list_id, phones |
| `import_contacts_from_conversations` | mutation | Importa a una lista de marketing masivo todos los telefonos de las conversacione | list_id |

## Seguimiento Inteligente

Analisis automatico de conversaciones para detectar intencion de compra y enviar seguimientos personalizados

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_smart_followup_config` | query | Obtiene la configuracion actual de seguimiento inteligente | -- |
| `save_smart_followup_config` | mutation | Actualiza la configuracion de seguimiento inteligente | enabled, run_hour, lookback_hours, min_intent_level, +15 more |
| `trigger_smart_followup` | mutation | Lanza manualmente el analisis de seguimiento inteligente para esta tienda | conversation_hash |
| `get_smart_followup_stats` | query | Estadisticas de recuperacion de ventas: embudo de conversion, tasa de respuesta, | period, date_from, date_to, page, +4 more |
| `get_smart_followup_logs` | query | Lista las acciones recientes de seguimiento inteligente: que clientes se contact | page, intent_level, action_taken, outcome, +4 more |
| `preview_smart_followup` | query | Genera una vista previa del mensaje de seguimiento que se enviaria a un cliente  | conversation_hash |

## Conversaciones

Buscar, ver y analizar conversaciones con clientes

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `search_conversations` | query | Busca conversaciones por texto, telefono o rango de fechas | query, phone, date_from, date_to, +9 more |
| `get_recent_conversations` | query | Obtiene las conversaciones mas recientes ordenadas por ultima actividad | limit, hours, query, phone, +9 more |
| `get_conversation_detail` | query | Muestra los mensajes completos de una conversacion especifica, incluyendo datos  | phone, conversation_id, last_n, query, +9 more |
| `get_conversations_summary` | query | Resumen estadistico de las conversaciones de un periodo: total, satisfaccion med | period, query, phone, date_from, +9 more |
| `get_unanswered_conversations` | query | Muestra conversaciones donde el ultimo mensaje es del cliente (sin respuesta del | hours, limit, query, phone, +9 more |
| `get_conversations_by_agent` | query | Muestra las conversaciones asignadas a un agente especifico | agent_id, limit, query, phone, +9 more |
| `delete_conversation_message` | mutation | Elimina un mensaje especifico de una conversacion | phone, message, query, date_from, +9 more |
| `export_conversations` | query | Exporta conversaciones con todos los mensajes en formato estructurado | phone, date_from, date_to, format, +9 more |
| `get_conversation_count` | query | Cuenta conversaciones que coinciden con criterios de busqueda, fecha o periodo | query, period, date_from, date_to, +9 more |

## Clientes

Informacion de clientes, comentarios, tags y busqueda

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_customer_info` | query | Obtiene perfil completo de un cliente: datos CRM, comentarios, tags, conversacio | phone, query, comment, agent_name, +5 more |
| `get_customer_comments` | query | Obtiene los comentarios y tags asociados a un cliente | phone, comment, agent_name, query, +5 more |
| `add_customer_comment` | mutation | Anade un nuevo comentario interno a la ficha de un cliente | phone, comment, agent_name, query, +5 more |
| `search_customer_comments` | query | Busca texto en los comentarios de todos los clientes | query, limit, phone, comment, +5 more |
| `add_customer_tag` | mutation | Anade una etiqueta (tag) a un cliente para clasificarlo | phone, tag_name, tag_color, comment, +5 more |
| `remove_customer_tag` | mutation | Elimina una etiqueta (tag) de un cliente | phone, tag_name, comment, agent_name, +5 more |
| `search_customers` | query | Busca clientes por nombre, telefono o email en el CRM y en los contactos | query, limit, phone, comment, +5 more |
| `get_customer_journey` | query | Timeline completo de un cliente: mensajes, comentarios, archivos, tareas, pedido | phone, date, period, days |
| `global_search` | query | Busca en todas las fuentes de datos de clientes: CRM, contactos, conversaciones | query, phone, comment, agent_name, +5 more |
| `merge_customers` | mutation | Fusiona dos registros de cliente en uno, combinando comentarios, tags y datos CR | primary_phone, secondary_phone |
| `get_customer_lifetime_value` | query | Calcula metricas de valor del cliente: pedidos, gasto, antiguedad, interacciones | phone |
| `gdpr_export_customer_data` | query | Exporta todos los datos almacenados de un cliente para cumplimiento GDPR (Art | phone |
| `gdpr_delete_customer_data` | mutation | Elimina todos los datos personales de un cliente para cumplimiento GDPR (Art | phone |

## Tareas

Gestion de tareas y recordatorios asociados a clientes

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `list_tasks` | query | Lista las tareas de la tienda con filtros opcionales por estado, agente o telefo | status, agent_id, phone, limit, +7 more |
| `create_task` | mutation | Crea una nueva tarea asociada opcionalmente a un cliente y agente | task_text, phone, due_date, priority, +7 more |
| `update_task` | mutation | Modifica una tarea existente: cambiar estado, texto, prioridad, fecha limite o a | task_id, task_text, status, due_date, +7 more |
| `delete_task` | mutation | Elimina una tarea permanentemente | task_id, status, agent_id, phone, +7 more |
| `get_overdue_tasks` | query | Muestra todas las tareas pendientes cuya fecha limite ya paso | status, agent_id, phone, limit, +7 more |
| `get_agent_tasks` | query | Muestra las tareas asignadas a un agente especifico | agent_id, include_completed, status, phone, +7 more |

## Calendario

Eventos y citas programadas

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `list_calendar_events` | query | Muestra los eventos programados en un rango de fechas | date_from, date_to, agent_id, phone, +7 more |
| `create_calendar_event` | mutation | Agenda un nuevo evento o cita en el calendario | title, start_datetime, end_datetime, description, +7 more |
| `update_calendar_event` | mutation | Modifica un evento existente del calendario | event_id, title, description, start_datetime, +7 more |
| `delete_calendar_event` | mutation | Elimina un evento del calendario | event_id, date_from, date_to, agent_id, +7 more |

## Actividad

Resumenes de actividad, tendencias y metricas operativas

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_daily_summary` | query | Resumen completo de actividad de un dia: conversaciones, mensajes, plugins, work | date |
| `get_period_stats` | query | Evolucion diaria de conversaciones y mensajes en un periodo | period |
| `get_busiest_hours` | query | Analiza a que horas del dia se reciben mas mensajes de clientes | days |
| `get_top_topics` | query | Muestra los temas/intenciones mas comunes en las conversaciones | days |
| `get_credit_history` | query | Muestra el consumo de creditos OpenAI por dia y por endpoint | days, date, period, phone |
| `get_conversation_analytics` | query | Distribucion de satisfaccion, urgencia e intenciones en conversaciones analizada | days, date, period, phone |
| `get_api_usage_stats` | query | Consumo de tokens y costes por modelo de IA | days |
| `get_shopify_sync_status` | query | Estado de conexion Shopify y estadisticas de clientes CRM sincronizados | -- |

## Productos

Busqueda de productos y estadisticas de consultas

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `search_products` | query | Busca productos en Shopify o en el CRM configurado | query, limit |
| `get_top_asked_products` | query | Muestra los productos sobre los que mas preguntan los clientes en el plugin Q&A | days, limit |

## WhatsApp

Estado de sesiones, logs de mensajes y ejecucion de workflows

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_whatsapp_status` | query | Muestra el estado de todas las sesiones de WhatsApp conectadas | -- |
| `get_whatsapp_message_logs` | query | Muestra los ultimos mensajes enviados y recibidos por WhatsApp | direction, phone, hours, limit, +1 more |
| `get_workflow_logs` | query | Muestra las ejecuciones recientes de workflows automaticos de WhatsApp | hours, limit, session_id |
| `precheck_delete_whatsapp_session` | query | Muestra qué configuraciones se verían afectadas al eliminar una sesión de WhatsA | session_id |
| `delete_whatsapp_session` | mutation | Elimina una sesion de WhatsApp desconectada | session_id, migrate_to |
| `get_whatsapp_response_time_stats` | query | Muestra la distribucion horaria de mensajes entrantes y salientes de WhatsApp | days, session_id |
| `get_whatsapp_health` | query | Estado combinado de sesiones, actividad de mensajes 24h y workflows activos | -- |
| `send_whatsapp_message` | mutation | Envia un mensaje de WhatsApp a un telefono | phone, message, session_id, archive_after_send |
| `list_whatsapp_optout` | query | Muestra los contactos que han solicitado no recibir mensajes automaticos de What | page, search |
| `add_whatsapp_optout` | mutation | Anade un numero a la lista de opt-out para que no reciba mensajes automaticos | phone, reason |
| `remove_whatsapp_optout` | mutation | Elimina un numero de la lista de opt-out para que pueda recibir mensajes automat | phone |
| `check_whatsapp_optout` | query | Comprueba si un numero de telefono esta en la lista de opt-out de automatizacion | phone |
| `list_scheduled_messages` | query | Muestra los mensajes de WhatsApp programados para envio futuro | status, page, period, date_from, +1 more |
| `create_scheduled_message` | mutation | Programa un mensaje de WhatsApp para envio futuro | session_id, phone, message_text, scheduled_at |
| `cancel_scheduled_message` | mutation | Cancela un mensaje de WhatsApp que esta programado para envio futuro | id |
| `list_whatsapp_templates` | query | Muestra las plantillas de mensajes guardadas para WhatsApp | category |
| `get_whatsapp_template` | query | Obtiene el detalle de una plantilla de mensaje especifica | id |
| `create_whatsapp_template_from_workflow` | mutation | Crea un nuevo workflow de WhatsApp a partir de una plantilla existente | template_id, session_id, name |
| `save_as_whatsapp_template` | mutation | Guarda un mensaje como plantilla reutilizable de WhatsApp | name, category |
| `delete_whatsapp_template` | mutation | Elimina una plantilla de mensaje de WhatsApp | id |
| `connect_whatsapp` | mutation | Inicia el proceso de conexión de un nuevo número de WhatsApp | label, force_new |
| `get_whatsapp_connection_status` | query | Muestra todas las sesiones de WhatsApp de la tienda con su estado actual (conect | -- |
| `get_whatsapp_workflow_activity` | query | Muestra estadísticas de ejecución de los workflows de WhatsApp en un periodo | days, session_id |
| `get_whatsapp_qr_image` | query | Sirve la imagen QR de vinculacion de WhatsApp como PNG | session_id |
| `get_whatsapp_profile` | query | Obtiene el perfil de WhatsApp de una sesion conectada: nombre, foto, estado/info | session_id |
| `update_whatsapp_profile` | mutation | Actualiza campos del perfil de WhatsApp: info/about, y datos de empresa (descrip | session_id, name, status, description, +4 more |
| `update_whatsapp_profile_picture` | mutation | Sube o elimina la foto de perfil de WhatsApp | session_id, action, image |

## Analisis IA

Resumenes y analisis de sentimiento con inteligencia artificial

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `get_ai_summary` | query | Genera un resumen de una conversacion usando IA | phone, summary_type, days, tone, +4 more |
| `get_sentiment_analysis` | query | Analiza el sentimiento e intencion del cliente en una conversacion usando IA | phone, summary_type, days, tone, +4 more |
| `get_sentiment_trend` | query | Muestra la evolucion del sentimiento a lo largo del tiempo | phone, days, summary_type, tone, +4 more |
| `get_smart_reply_suggestions` | query | Genera 3 sugerencias de respuesta basadas en la conversacion actual | phone, tone, summary_type, days, +4 more |
| `auto_tag_customer` | query | Analiza la conversacion con IA y sugiere tags relevantes para el cliente | phone, summary_type, days, tone, +4 more |
| `auto_categorize_conversations` | query | Categoriza conversaciones recientes por tema, intento y prioridad usando IA | hours, limit, phone, summary_type, +4 more |
| `translate_conversation` | query | Traduce los ultimos mensajes de una conversacion a otro idioma usando IA | phone, target_language, last_n, summary_type, +4 more |

## Notificaciones

Gestion de notificaciones del sistema

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `list_notifications` | query | Obtiene las notificaciones del sistema con filtros opcionales | filter, type, limit, offset, +2 more |
| `mark_notification_read` | mutation | Marca una notificacion especifica como leida | notification_id, agent_id, limit, offset, +2 more |
| `mark_all_notifications_read` | mutation | Marca todas las notificaciones no leidas como leidas | agent_id, limit, offset, filter, +2 more |
| `delete_notification` | mutation | Elimina permanentemente una notificacion | notification_id, limit, offset, filter, +2 more |
| `get_unread_notification_count` | query | Obtiene el numero de notificaciones pendientes de leer | limit, offset, filter, type, +2 more |

## Base de Conocimiento

Gestión de archivos y documentos de la base de conocimiento

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `download_knowledge_file` | query | Obtiene la URL de descarga de un archivo de la base de conocimiento | id |
| `get_knowledge_processing_status` | query | Obtiene el estado de procesamiento de todos los archivos de conocimiento (pollin | -- |
| `upload_knowledge_file` | mutation | Sube un archivo a la base de conocimiento de la tienda para que la IA lo use al  | title, description, file |

## Referidos

Programa de referidos - genera enlaces y consulta ganancias

| Tool | Type | Description | Key Parameters |
|------|------|-------------|----------------|
| `generate_referral_code` | mutation | Genera el enlace único de referido del usuario para compartir | -- |
| `get_referral_data` | query | Muestra los referidos del usuario, comisiones pendientes y pagadas, y estado de  | -- |
| `request_referral_payout` | mutation | Solicita el pago de las comisiones pendientes (mínimo 50€) | -- |

