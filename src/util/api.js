import axios from 'axios';
import { URL } from './constants';

axios.defaults.baseURL = URL;

class KityPlanchoAPI {
    constructor(){
        this.path = 'clientes'
    }

    async getClients (){
       try {
            const { data } = await axios.get(this.path)
            return data;
       } catch (error) {
            console.log(e);
       }
    }
}

// export const getClients = () => {
//     return fetch(`${URL}clientes`)
//       .then(response => response.json())
     
// }

export { KityPlanchoAPI };