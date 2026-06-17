import { motion } from "motion/react";
import { architectures } from "../data/architecture";
import { ArchitectureCard } from "../components/ArchitectureCard";

export function ArchitectureShowcase() {
  return (
    <section id="architecture" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Архитектура
          </h2>
          <div className="h-1 w-20 bg-zinc-700 mx-auto mb-4" />
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Архитектурные решения и шаблоны для масштабируемых распределенных backend-систем
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {architectures.map((architecture, index) => (
              <ArchitectureCard
                key={architecture.id}
                architecture={architecture}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
