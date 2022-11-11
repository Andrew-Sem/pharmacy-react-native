import { AxiosResponse } from "axios";
import { IDrug } from "../models/IDrug";
import { $api } from "../http/api";

export class DrugsService {
  static fetchDrugs(): Promise<AxiosResponse<IDrug[]>> {
    return $api.get<IDrug[]>("drugs/v1/catalogue");
  }
  static deleteDrugById(id: string) {
    return $api.delete("drugs/v1/delete/" + id);
  }

  static updateDrugById({
    id,
    drugName,
    composition,
    dosageFormName,
    producerName,
    price,
  }: IDrug) {
    return $api.post("drugs/v1/update/" + id, {
      drugName,
      price,
      composition,
      producerName,
      dosageFormName,
    });
  }

  static addDrug({
    drugName,
    composition,
    dosageFormName,
    producerName,
    price,
  }: IDrug) {
    return $api.post("drugs/v1/new", {
      drugName,
      price,
      composition,
      producerName,
      dosageFormName,
    });
  }
}
