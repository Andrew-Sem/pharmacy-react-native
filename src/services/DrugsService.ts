import {AxiosResponse} from "axios";
import {IDrug} from "../models/IDrug";
import {$api} from "../http/api";


export class DrugsService{
    static fetchDrugs():Promise<AxiosResponse<IDrug[]>>{
        return $api.get<IDrug[]>("drugs/v1/catalogue")
    }
}