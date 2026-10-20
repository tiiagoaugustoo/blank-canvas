import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tela em branco" },
      { name: "description", content: "Uma tela em branco." },
      { property: "og:title", content: "Tela em branco" },
      { property: "og:description", content: "Uma tela em branco." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <div className="min-h-screen bg-background" />;
}
