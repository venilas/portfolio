import { motion } from "motion/react";
import { projects } from "../data/projects";
import { GraduationCap } from "lucide-react";

export function LearningGrowth() {
  // Extract learning data from projects
  const learningData = projects
    .filter(project => project.learned && project.learned.length > 0)
    .map(project => ({
      projectTitle: project.title,
      skills: project.learned || []
    }));

  return (
    <section id="learning" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Обучение и рост
          </h2>
          <div className="h-1 w-20 bg-zinc-700 mx-auto mb-4" />
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Непрерывное обучение через практические проекты и инженерные задачи
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {learningData.map((item, index) => (
              <motion.div
                key={item.projectTitle}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-zinc-800 rounded-lg flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {item.projectTitle}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">
                Установка на рост
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Каждый проект — это возможность для обучения. Я ищу задачи, которые расширяют мои знания
                о backend-системах, распределенной архитектуре и оптимизации производительности. Непрерывное улучшение
                через решение реальных задач — основа моей инженерной философии.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
