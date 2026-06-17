import { motion } from "motion/react";
import { competencies } from "../data/skills";

export function About() {
  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            О себе
          </h2>
          <div className="h-1 w-20 bg-zinc-700 mx-auto mb-12" />

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-12">
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Я Python Backend Developer, создающий надежные и масштабируемые системы, решающие реальные задачи.
              Моя специализация — проектирование REST API, асинхронные архитектуры и оптимизация производительности баз данных.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Я пишу чистый, поддерживаемый код, автоматизирую деплойменты и постоянно изучаю новые технологии.
              Каждый проект — это возможность улучшить архитектуру системы и инженерные практики.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {competency.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {competency.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
