import addressApi from "../api/addressApi";
import { Address } from "../models/Address";


class AddressService {

    async addAddress(data:any): Promise<Address | void> {
        try {
            const response = await addressApi.addAddress(data);
            return response;
        }catch(error) {
            console.log("Address error : " +error)
        }
    }

}


export default new AddressService();