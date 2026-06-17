export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  architecture?: string;
  learned?: string[];
}

export const projects: Project[] = [
  {
    id: "telegram-bot-alex-avto",
    title: "Telegram Бот для брокеров по перевозки автомобилей из Кореи",
    description: "Данный бот синхронизирован с Encar (encar.com), благодаря чему он быстро получить примерный расчет по интересующему пользователю автомобилю.",
    techStack: ["Python", "Aiogram 3", "PostgreSQL", "Redis", "Docker", "aiohttp"],
    features: [],
    demoUrl: "https:/t.me/alex_avto24_bot",
  },
];
