import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { TechStack } from "./sections/TechStack";
import { Projects } from "./sections/Projects";
import { EngineeringExperience } from "./sections/EngineeringExperience";
import { ArchitectureShowcase } from "./sections/ArchitectureShowcase";
import { LearningGrowth } from "./sections/LearningGrowth";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <EngineeringExperience />
      <ArchitectureShowcase />
      <LearningGrowth />
      <Contact />
    </div>
  );
}