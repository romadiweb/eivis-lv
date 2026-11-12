import { PageShell } from "@/app/_components/page-shell";
import { pageContent } from "@/lib/page-content";

export function ModulePage({ contentKey }: { contentKey: string }) {
  return <PageShell content={pageContent[contentKey]} />;
}
