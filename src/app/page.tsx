import Image from "next/image";
import Header from "@/components/elements/header";
import Languages from "@/components/elements/languages";
import Projects from "@/components/elements/projects";
import ExperiencesSection from "@/components/elements/experiences";
import ContactMeSection from "@/components/elements/contactMe";
export default function Home() {
  return (
    <main>
      <Header />
      <Languages />
      <Projects />
      <ExperiencesSection />
      <ContactMeSection />
    </main>
  );
}
