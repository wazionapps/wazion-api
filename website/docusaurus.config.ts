import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "WAzion Developer Docs",
  tagline: "Connect 238 WhatsApp Business AI tools to any application",
  favicon: "img/favicon.ico",

  url: "https://developers.wazion.com",
  baseUrl: "/",

  organizationName: "wazionapps",
  projectName: "wazion-api",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          // Point to the parent docs/ directory
          path: "../docs",
          routeBasePath: "docs",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/wazionapps/wazion-api/edit/main/",
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/wazion-social-card.png",

    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "WAzion Developers",
      logo: {
        alt: "WAzion Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/api-reference",
          label: "API Reference",
          position: "left",
        },
        {
          href: "https://github.com/wazionapps/wazion-api",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.wazion.com/dashboard",
          label: "Dashboard",
          position: "right",
          className: "navbar-dashboard-link",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/authentication",
            },
            {
              label: "WhatsApp Messaging",
              to: "/docs/whatsapp-messaging",
            },
            {
              label: "AI Capabilities",
              to: "/docs/ai-capabilities",
            },
            {
              label: "Workflows",
              to: "/docs/workflows",
            },
          ],
        },
        {
          title: "Reference",
          items: [
            {
              label: "API Reference",
              to: "/api-reference",
            },
            {
              label: "Tools Catalog",
              to: "/docs/tools-catalog",
            },
            {
              label: "Errors",
              to: "/docs/errors",
            },
            {
              label: "Webhooks",
              to: "/docs/webhooks",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "WAzion.com",
              href: "https://www.wazion.com",
            },
            {
              label: "GitHub — API Spec",
              href: "https://github.com/wazionapps/wazion-api",
            },
            {
              label: "GitHub — MCP Server",
              href: "https://github.com/wazionapps/mcp-server",
            },
            {
              label: "Support",
              href: "mailto:support@wazion.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WAzion. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "python", "php", "typescript", "javascript"],
    },

    // algolia: {}, // Add Algolia DocSearch later for search
  } satisfies Preset.ThemeConfig,
};

export default config;
