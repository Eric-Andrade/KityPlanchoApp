import axios from 'axios';
import { URL } from './constants';

axios.defaults.baseURL = URL;

class KityPlanchoAPI {
    constructor(){
        //* pedidos
        this.getallpdpr = 'dedicados/getallpdpr'
        //* servicios
        this.getserviciosactivos = 'servicios/getallactivos'
    }
//* pedidos
    async getALLPDPR (){
       try {
            const { data } = await axios.get(this.getallpdpr)
            return data;
       } catch (error) {
            console.log(error);
       }
    }
//* servicios
    async getAllServiciosActivos (){
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