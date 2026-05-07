import { TopNav } from "@/components/layout/TopNav";
import { PromoBanner } from "@/components/layout/PromoBanner";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ContactPanelProvider } from "@/components/contact/ContactPanelContext";
import { ContactPanel } from "@/components/contact/ContactPanel";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContactPanelProvider>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <ScrollProgress />
      <TopNav />
      <PromoBanner />
      <div className="min-h-screen w-full">
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </div>
      <ContactPanel />
    </ContactPanelProvider>
  );
}
