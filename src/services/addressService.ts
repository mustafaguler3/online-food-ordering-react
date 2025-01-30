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
    async getAddress(addressId?:any) {
        try {
            const response = await addressApi.getAddress(addressId);

            return response;
        }catch(error) {
            console.log("Error getting address: ")
        }
    }

}


export default new AddressService();