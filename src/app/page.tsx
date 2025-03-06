import { Navbar } from "@/components/Navbar/Navbar";
import { Profile } from "@/sections/Profile";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-svh relative">
      <Navbar />
      <Profile />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
