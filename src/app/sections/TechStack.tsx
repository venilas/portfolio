import { motion } from "motion/react";
import { skillCategories } from "../data/skills";
import { SkillCard } from "../components/SkillCard";

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Технологический стек
          </h2>
          <div className="h-1 w-20 bg-zinc-700 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.category}
                category={category.category}
                skills={category.skills}
                icon={category.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
