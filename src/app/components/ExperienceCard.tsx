import { motion } from "motion/react";
import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";
import type { EngineeringTask } from "../data/experience";

interface ExperienceCardProps {
  task: EngineeringTask;
  index: number;
}

export function ExperienceCard({ task, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-4">{task.title}</h3>

      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <h4 className="text-sm font-medium text-zinc-300">Проблема</h4>
          </div>
          <p className="text-sm text-zinc-400 pl-6">{task.problem}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-yellow-400" />
            <h4 className="text-sm font-medium text-zinc-300">Решение</h4>
          </div>
          <p className="text-sm text-zinc-400 pl-6">{task.solution}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <h4 className="text-sm font-medium text-zinc-300">Результат</h4>
          </div>
          <p className="text-sm text-zinc-400 pl-6">{task.result}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-zinc-800">
        <div className="flex flex-wrap gap-2">
          {task.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
