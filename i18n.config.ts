import { messages } from "./i18n/index";

export default defineI18nConfig(() => ({
  warnHtmlMessage: false,
  messages,
  defaultLocale: "en-US",
  fallbackLocale: {
    "en-US": ["en-US"],
    "pt-BR": ["pt-BR"],
  },
}));
