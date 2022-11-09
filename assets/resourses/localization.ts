import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

const translations = {
  en: {
    Home: "Home",
    Drugs: "Drugs",
    Producers: "Producers",
    Dosage: "Dosage",
    AddDrug: "Add drug",
    DrugName: "Drug name",
    Producer: "Producer",
  },
  ru: {
    Home: "Главная",
    Drugs: "Лекарства",
    Producers: "Производители",
    Dosage: "Дозировка",
    AddDrug: "Добавить лекарство",
    DrugName: "Наименование лекарства",
    Producer: "Производитель",
  },
};
export const i18n = new I18n(translations);
i18n.locale = Localization.locale;
i18n.enableFallback = true;
