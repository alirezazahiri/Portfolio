import { BaseLayout } from "@/components/layouts/base";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout>{children}</BaseLayout>;
}
