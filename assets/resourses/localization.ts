import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

const translations = {
  en: {
    Home: "Home",
    Drugs: "Drugs",
    Producers: "Producers",
    Dosage: "Dosage form name",
    AddDrug: "Add drug",
    DrugName: "Drug name",
    Producer: "Producer",
    UpdateInfo: "Update Info",
    Price: "Price",
    Composition: "Composition",
    AddProducer: "Add producer",
    AddDosage: "Add dosage",
  },
  ru: {
    Home: "Главная",
    Drugs: "Лекарства",
    Producers: "Производители",
    Dosage: "Форма дозировки",
    AddDrug: "Добавить лекарство",
    DrugName: "Наименование лекарства",
    Producer: "Производитель",
    UpdateInfo: "Обновить инфомацию",
    Price: "Цена",
    Composition: "Состав",
    AddProducer: "Добавить производителя",
    AddDosage: "Добавить дозу",
  },
};
export const i18n = new I18n(translations);
i18n.locale = Localization.locale;
i18n.enableFallback = true;
