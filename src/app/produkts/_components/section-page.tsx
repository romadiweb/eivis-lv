import { PageShell } from "@/app/_components/page-shell";
import { pageContent } from "@/lib/page-content";

export function ProductPage({ contentKey }: { contentKey: string }) {
  return <PageShell content={pageContent[contentKey]} />;
}
