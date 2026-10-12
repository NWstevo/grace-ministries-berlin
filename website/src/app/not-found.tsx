import { ButtonLink, PageHeader } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" title="Page not found" intro="The page you are looking for doesn’t exist or has moved." />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </>
  );
}
