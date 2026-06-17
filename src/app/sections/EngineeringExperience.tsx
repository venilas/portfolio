import { motion } from "motion/react";
import { engineeringExperience } from "../data/experience";
import { ExperienceCard } from "../components/ExperienceCard";

export function EngineeringExperience() {
  return (
    <section id="experience" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Опыт разработки
          </h2>
          <div className="h-1 w-20 bg-zinc-700 mx-auto mb-4" />
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Реальные инженерные задачи, решенные с помощью backend-экспертизы, системного мышления и оптимизации производительности
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {engineeringExperience.map((task, index) => (
              <ExperienceCard key={task.id} task={task} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
