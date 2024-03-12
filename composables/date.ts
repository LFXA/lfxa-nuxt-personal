export const formatDate = (date: string, lang: string) => {
  return new Date(date).toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
