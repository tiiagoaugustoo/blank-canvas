import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conecta Luziânia - PontoiD Technology" },
      { name: "description", content: "Tela de cadastro do aluno — Conecta Luziânia." },
      { property: "og:title", content: "Conecta Luziânia - PontoiD Technology" },
      { property: "og:description", content: "Tela de cadastro do aluno — Conecta Luziânia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  // Keep the captured document isolated from the app's Tailwind styles.
  // Its original backend actions are intentionally disabled in this visual copy.
  return (
    <iframe
      src="/conecta.html"
      title="Conecta Luziânia — Editar Aluno"
      sandbox="allow-same-origin"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
