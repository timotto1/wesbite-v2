import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <ScrollProgress />
      <TopNav />
      <div className="mx-auto min-h-screen w-full max-w-page">
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
