import { $api } from "../http/api";

export class ProducersService {
  static addProducer(producerName: string, country: string) {
    return $api.post("producers/v1/new", { producerName, country });
  }

  static fetchProducers() {
    return $api.get("producers/v1/catalogue");
  }
}
