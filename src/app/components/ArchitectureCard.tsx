import { motion } from "motion/react";
import { Network } from "lucide-react";
import type { Architecture } from "../data/architecture";

interface ArchitectureCardProps {
  architecture: Architecture;
  index: number;
}

export function ArchitectureCard({ architecture, index }: ArchitectureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <Network className="w-5 h-5 text-zinc-400" />
        <h3 className="text-lg font-semibold text-white">{architecture.title}</h3>
      </div>

      <p className="text-sm text-zinc-400 mb-4">{architecture.description}</p>

      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
        <pre className="text-xs text-zinc-400 font-mono whitespace-pre">
          {architecture.diagram.trim()}
        </pre>
      </div>

      <div className="flex flex-wrap gap-2">
        {architecture.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
