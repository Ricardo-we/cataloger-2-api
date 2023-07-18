import BaseRequest from "@/libs/base/BaseRequest";
import { Catalog } from "@/types/Catalog";
import User from "@/types/User";
import { userCatalogsAdapter } from "./catalogAdapters";

const endpoint = "/catalogs";

export class CatalogsService extends BaseRequest {
    constructor(onError?: (err?: any) => any){
        super(endpoint, onError)
    }
    
    findCatalogs = async (userId: number) => {
        const response = await this.find({ routeParams: `/${userId}` });
        return userCatalogsAdapter(response);
    }
}