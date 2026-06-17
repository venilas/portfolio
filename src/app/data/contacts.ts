export interface Contact {
  label: string;
  value: string;
  url: string;
  icon: string;
}

export const contacts: Contact[] = [
  {
    label: "GitHub",
    value: "@venilas",
    url: "https://github.com/venilas",
    icon: "Github"
  },
  {
    label: "Telegram",
    value: "@varikozny",
    url: "https://t.me/varikozny",
    icon: "Send"
  },
  {
    label: "Email",
    value: "ilyasaminev3@mail.ru",
    url: "mailto:ilyasaminev3@mail.ru",
    icon: "Mail"
  },
];
