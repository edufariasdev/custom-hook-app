import { format } from "date-fns";
import { ptBR, enUS } from "date-fns/locale";

type style =
  | "dd/MM/yyyy"
  | "MMM dd, HH:mm"
  | "dd/MM/yyyy HH:mm"
  | "dd/MM/yyyy HH:mm:ss"
  | "dd MMM, yyyy"
  | "MMMM dd, yyyy"
  | "MMM dd, yyyy"
  | "dd MMM"
  | 'MMMM yy'
  | 'MMMM dd, HH:mm'
  | 'MMM dd, yyyy - HH:mm'
  | "MMM dd"
  |' HH:mm:ss'
  | "yyyy-MM-dd";

const Locale = {
  PT: ptBR,
  EN: enUS,
};

type typeLanguage = "PT" | "EN";

export const FormatDate = (date: Date, style: style, locale: typeLanguage) => {
  return format(date, style, {
    locale: Locale[locale],
  });
};
