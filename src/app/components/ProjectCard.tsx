import { motion } from "motion/react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Перейти на GitHub репозиторий"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Посмотреть демо"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-zinc-400 mb-4 leading-relaxed">{project.description}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-zinc-300 mb-2 flex items-center gap-2">
          <Code2 className="w-4 h-4" />
          Ключевые особенности
        </h4>
        <ul className="space-y-1">
          {project.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-zinc-400 pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-zinc-600">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {project.architecture && (
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <h4 className="text-sm font-medium text-zinc-300 mb-2">Архитектура</h4>
          <pre className="text-xs text-zinc-400 bg-zinc-950 p-3 rounded border border-zinc-800 overflow-x-auto font-mono">
            {project.architecture.trim()}
          </pre>
        </div>
      )}
    </motion.div>
  );
}
