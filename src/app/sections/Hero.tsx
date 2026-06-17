import { motion } from "motion/react";
import { Github, Send, FileText, ChevronDown } from "lucide-react";
// import { resumeUrl } from "../data/contacts";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Ilyas Aminev
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-zinc-700" />
              <h2 className="text-2xl md:text-3xl text-zinc-400">
                Python Backend Developer
              </h2>
              <div className="h-px w-12 bg-zinc-700" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Создаю масштабируемые бэкенд-сервисы, REST API и Telegram-ботов с помощью{" "}
            <span className="text-white font-medium">FastAPI</span>,{" "}
            <span className="text-white font-medium">AIOgram</span>,{" "}
            <span className="text-white font-medium">PostgreSQL</span> и{" "}
            <span className="text-white font-medium">Docker</span>.
            Специализируюсь на асинхронном Python, микросервисной архитектуре и DevOps-автоматизации.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://github.com/venilas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://t.me/varikozny"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 transition-colors border border-zinc-700"
            >
              <Send className="w-5 h-5" />
              Telegram
            </a>
            {/* <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 transition-colors border border-zinc-700"
            >
              <FileText className="w-5 h-5" />
              Резюме
            </a> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-zinc-400 hover:text-white transition-colors animate-bounce"
              aria-label="Прокрутить до раздела обо мне"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
