import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";

interface SkillCardProps {
  category: string;
  skills: string[];
  icon?: string;
  index: number;
}

export function SkillCard({ category, skills, icon, index }: SkillCardProps) {
  const IconComponent = icon && icon in LucideIcons
    ? (LucideIcons as any)[icon]
    : LucideIcons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-zinc-800 rounded-lg">
          <IconComponent className="w-5 h-5 text-zinc-300" />
        </div>
        <h3 className="text-lg font-semibold text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm bg-zinc-800 text-zinc-300 rounded-md hover:bg-zinc-700 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
