import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

type Feature = {
  title: string;
  emoji: string;
  description: string;
  link: string;
};

const features: Feature[] = [
  {
    title: "WhatsApp Messaging",
    emoji: "💬",
    description:
      "Send messages, media, templates, and interactive buttons via 238 MCP tools.",
    link: "/docs/whatsapp-messaging",
  },
  {
    title: "AI Capabilities",
    emoji: "🤖",
    description:
      "Built-in copilot, auto-pilot mode, and smart reply suggestions powered by LLMs.",
    link: "/docs/ai-capabilities",
  },
  {
    title: "Workflows & Automation",
    emoji: "⚡",
    description:
      "Visual workflow builder with conditionals, delays, and multi-step automations.",
    link: "/docs/workflows",
  },
  {
    title: "Mass Marketing",
    emoji: "📣",
    description:
      "Broadcast campaigns to thousands of contacts with delivery analytics.",
    link: "/docs/mass-marketing",
  },
  {
    title: "CRM & Customers",
    emoji: "👥",
    description:
      "Manage contacts, tags, custom fields, and conversation history.",
    link: "/docs/crm-customers",
  },
  {
    title: "Knowledge Base",
    emoji: "📚",
    description:
      "Upload documents and let the AI answer questions from your own content.",
    link: "/docs/knowledge-base",
  },
];

function HeroSection() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          WAzion API
        </Heading>
        <p className="hero__subtitle">
          Connect 238 WhatsApp Business AI tools to any application
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/authentication"
          >
            Get Started →
          </Link>
          <Link
            className={clsx("button button--outline button--lg", styles.buttonOutline)}
            to="/api-reference"
          >
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, emoji, description, link }: Feature) {
  return (
    <Link to={link} className={clsx("featureCard", styles.featureCardLink)}>
      <div className={styles.featureEmoji}>{emoji}</div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </Link>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Everything you need to build on WhatsApp
        </Heading>
        <div className={styles.featuresGrid}>
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickstart}>
      <div className="container">
        <div className={styles.quickstartInner}>
          <div>
            <Heading as="h2">Start in 2 minutes</Heading>
            <p>
              Every WAzion account comes with an API token. No OAuth flows, no
              approval process — just grab your token and start sending.
            </p>
            <Link className="button button--primary button--lg" to="/docs/authentication">
              Read the Quickstart
            </Link>
          </div>
          <div className={styles.codeSnippet}>
            <pre>
              <code>{`curl -X POST https://www.wazion.com/api/mcp/ \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "send_whatsapp_message",
      "arguments": {
        "phone": "+34600000000",
        "message": "Hello from WAzion API!"
      }
    },
    "id": 1
  }'`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HeroSection />
      <main>
        <FeaturesSection />
        <QuickStartSection />
      </main>
    </Layout>
  );
}
