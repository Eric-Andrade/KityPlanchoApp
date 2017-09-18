import axios from 'axios';
import { URL } from './constants';

axios.defaults.baseURL = URL;

class KityPlanchoAPI {
    constructor(){
        this.getclientes = 'clientes'
        this.getserviciosactivos = 'servicios/getallactivos'
    }

    async getClients (){
       try {
            const { data } = await axios.get(this.getclientes)
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