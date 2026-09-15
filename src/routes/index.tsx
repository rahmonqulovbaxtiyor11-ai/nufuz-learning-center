import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import {
  About,
  Contact,
  Faq,
  Footer,
  Hero,
  Programs,
  Results,
  Stats,
  Teachers,
  Testimonials,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NUFUZ Learning Center — IELTS va Multilevel kurslari, Gijduvon" },
      {
        name: "description",
        content:
          "NUFUZ Learning Center Gijduvonda 2020 yildan beri IELTS, Multilevel (CEFR), SAT va General English kurslarini o‘tadi. Kichik guruhlar, professional mock imtihonlar, 3000+ o‘quvchi.",
      },
      { property: "og:title", content: "NUFUZ Learning Center — IELTS & Multilevel in Gijduvon" },
      {
        property: "og:description",
        content:
          "Small groups, weekly mock exams and personal study plans for IELTS and Multilevel (CEFR). 3000+ learners since 2020.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background">
        <Nav />
        <main>
          <Hero />
          <Stats />
          <Programs />
          <Results />
          <Teachers />
          <About />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
