export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend-разработка",
    skills: ["Python", "FastAPI", "Aiogram", "aiohttp", "asyncio"],
    icon: "Server"
  },
  {
    category: "Базы данных",
    skills: ["PostgreSQL", "Redis", "SQLite", "SQLAlchemy"],
    icon: "Database"
  },
  {
    category: "Инфраструктура и DevOps",
    skills: ["Docker", "Docker Compose", "GitLub CI-CD", "GitHub Actions", "Linux"],
    icon: "Container"
  },
  {
    category: "Библиотеки и инструменты",
    skills: ["Pydantic", "Alembic", "pytest", "Black", "Ruff", "uv"],
    icon: "Package"
  },
  {
    category: "Архитектура и паттерны",
    skills: ["REST API", "Микросервисы", "Асинхронное программирование", "Паттерны проектирования", "Чистая архитектура"],
    icon: "GitBranch"
  }
];

export const competencies = [
  {
    title: "Backend-разработка",
    description: "Создание масштабируемых REST API и backend-сервисов на FastAPI, работа с асинхронными операциями и применение паттернов чистой архитектуры."
  },
  {
    title: "Проектирование API",
    description: "Проектирование RESTful API с версионированием, документацией и обработкой ошибок. Фокус на удобстве разработчика и поддерживаемости."
  },
  {
    title: "Базы данных",
    description: "Опыт оптимизации PostgreSQL, настройки запросов, стратегий индексирования и работы с ORM SQLAlchemy. Redis для кеширования и управления сессиями."
  },
  {
    title: "Docker и DevOps",
    description: "Контейнеризация с Docker, оркестрация Docker Compose, CI/CD-пайплайны на GitHub Actions и автоматизированные деплойменты."
  },
  {
    title: "Асинхронное программирование",
    description: "Понимание Python asyncio, обработка параллельных запросов, фоновых задач и создание высокопроизводительных асинхронных приложений."
  }
];
