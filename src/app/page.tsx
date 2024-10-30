import Header from "@/components/elements/header";
import Languages from "@/components/elements/languages";
import Projects from "@/components/elements/projects";
import ExperiencesSection from "@/components/elements/experiences";
import ContactMeSection from "@/components/elements/contactMe";
import Footer from "@/components/elements/footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Languages />
      <Projects />
      <ExperiencesSection />
      <ContactMeSection />
      <Footer />
    </main>
  );
}
