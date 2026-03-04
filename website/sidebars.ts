import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["authentication"],
    },
    {
      type: "category",
      label: "Core Features",
      collapsed: false,
      items: [
        "whatsapp-messaging",
        "ai-capabilities",
        "workflows",
        "mass-marketing",
        "crm-customers",
      ],
    },
    {
      type: "category",
      label: "Advanced",
      collapsed: false,
      items: [
        "knowledge-base",
        "webhooks",
        "errors",
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: false,
      items: ["tools-catalog"],
    },
  ],
};

export default sidebars;
