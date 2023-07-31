import AboutSection from "@/app/components/AboutSection"
import HeroSection from "@/app/components/HeroSection"
import ProjectsSection from "@/app/components/ProjectSection"
import ContactForm from "@/app/components/ContactForm"
export default function Home() {
  return (
    <main className="w-full mx-auto  ">
      <HeroSection />
        <div className="pt-2 items-center justify-center " >
        <AboutSection />
        <ProjectsSection />
        </div>
        <ContactForm />
    </main>
  )
}
