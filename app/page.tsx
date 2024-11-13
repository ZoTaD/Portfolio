import Banner from "@/components/Banner";
import Aboutme from "@/components/Aboutme";
import Experience from "@/components/Experiencie";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
