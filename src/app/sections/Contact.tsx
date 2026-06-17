import { motion } from "motion/react";
import { contacts } from "../data/contacts";
import { ContactCard } from "../components/ContactCard";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Связаться
          </h2>
          <div className="h-1 w-20 bg-zinc-700 mx-auto mb-4" />
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Готов к задачам по backend-разработке, техническим коллаборациям и интересным проектам
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {contacts.map((contact) => (
                <ContactCard key={contact.label} contact={contact} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                Написать мне
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-zinc-500 text-sm">
              © 2026 Ilyas Aminev. Создано с помощью React, TypeScript и TailwindCSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
