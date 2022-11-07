import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

const translations = {
  en: {
    Home: "Home",
    Table1: "Table 1",
    Table2: "Table 2",
    Table3: "Table 3"
  },
  ru: {
    Home: "Главная",
    Table1: "Таблица 1",
    Table2: "Таблица 2",
    Table3: "Таблица 3"
  },
};
export const i18n = new I18n(translations);
i18n.locale = Localization.locale;
i18n.enableFallback = true;
