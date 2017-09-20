import axios from 'axios';
import { URL } from './constants';

axios.defaults.baseURL = URL;

class KityPlanchoAPI {
    constructor(){
        this.getpdp = 'dedicados/getpdp'
        this.getserviciosactivos = 'servicios/getallactivos'
    }

    async getPDP (){
       try {
            const { data } = await axios.get(this.getpdp)
            return data;
       } catch (error) {
            console.log(error);
       }
    }

    async getServices (){
        try {
             const { data } = await axios.get(this.getserviciosactivos);
             return data;
        } catch (error) {
             console.log(error);
        }
     }
}

// export const getClients = () => {
//     return fetch(`${URL}clientes`)
//       .then(response => response.json())
     
// }

export { KityPlanchoAPI };