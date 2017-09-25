import axios from 'axios';
import { URL } from './constants';

axios.defaults.baseURL = URL;

class KityPlanchoAPI {
    constructor(){
        //* pedidos
        this.getallpdpr = 'dedicados/getallpdpr'
        this.getonepdpr = '/dedicados/getonepdpr?id=4'
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

    async getONEPDPR (){
        try {
             const { data } = await axios.get(this.getonepdpr)
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