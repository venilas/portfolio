import * as LucideIcons from "lucide-react";
import type { Contact } from "../data/contacts";

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  const IconComponent = contact.icon in LucideIcons
    ? (LucideIcons as any)[contact.icon]
    : LucideIcons.Link;

  return (
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 hover:bg-zinc-850 transition-all duration-300 group"
    >
      <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-zinc-700 transition-colors">
        <IconComponent className="w-5 h-5 text-zinc-300" />
      </div>
      <div>
        <div className="text-sm font-medium text-white">{contact.label}</div>
        <div className="text-xs text-zinc-400">{contact.value}</div>
      </div>
    </a>
  );
}
