import type { ReactNode } from "react";
import { useEffect } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./api-reference.module.css";

/**
 * Swagger UI is loaded from CDN and renders the openapi.yaml spec.
 * The spec is served from the /static/ folder as openapi.yaml.
 */
function SwaggerUIComponent() {
  useEffect(() => {
    // Load Swagger UI CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/swagger-ui-dist@5/swagger-ui.css";
    document.head.appendChild(link);

    // Load Swagger UI JS then initialize
    const script = document.createElement("script");
    script.src = "https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js";
    script.onload = () => {
      // @ts-ignore — loaded via script tag
      const SwaggerUIBundle = window.SwaggerUIBundle;
      SwaggerUIBundle({
        url: "/openapi.yaml",
        dom_id: "#swagger-ui",
        presets: [
          SwaggerUIBundle.presets.apis,
          // @ts-ignore
          window.SwaggerUIStandalonePreset,
        ],
        layout: "BaseLayout",
        deepLinking: true,
        displayRequestDuration: true,
        filter: true,
        tryItOutEnabled: true,
        requestSnippetsEnabled: true,
      });
    };
    document.body.appendChild(script);

    // Also load standalone preset for proper layout
    const scriptPreset = document.createElement("script");
    scriptPreset.src =
      "https://unpkg.com/swagger-ui-dist@5/swagger-ui-standalone-preset.js";
    document.body.appendChild(scriptPreset);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className={styles.swaggerWrapper}>
      <div id="swagger-ui" />
    </div>
  );
}

export default function ApiReference(): ReactNode {
  return (
    <Layout
      title="API Reference"
      description="Full OpenAPI reference for the WAzion REST/MCP API"
    >
      <div className="container margin-vert--lg">
        <div className={styles.header}>
          <h1>API Reference</h1>
          <p>
            Interactive reference for all WAzion API endpoints. You can try
            requests directly from the browser after entering your Bearer token
            in the <strong>Authorize</strong> button.
          </p>
          <p>
            Download the raw spec:{" "}
            <a href="/openapi.yaml" download>
              openapi.yaml
            </a>
          </p>
        </div>
      </div>
      <BrowserOnly fallback={<div>Loading API reference...</div>}>
        {() => <SwaggerUIComponent />}
      </BrowserOnly>
    </Layout>
  );
}
