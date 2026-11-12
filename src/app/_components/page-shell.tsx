import type { PageContent } from "@/lib/page-content";

type PageShellProps = {
  content: PageContent;
};

export function PageShell({ content }: PageShellProps) {
  return (
    <main className="page-shell">
      <section className="page-shell__content">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </section>
    </main>
  );
}
