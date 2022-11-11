import { $api } from "../http/api";

export class DosageService {
  static addDosage(dosageFormName: string) {
    return $api.post("dosages/v1/new", { dosageFormName });
  }

  static fetchDosages() {
    return $api.get("dosages/v1/catalogue");
  }
}
