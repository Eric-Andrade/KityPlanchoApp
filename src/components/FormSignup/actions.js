import { KityPlanchoAPI } from '../../util/api';
import { getAllServiciosActivos } from '../../screens/redux/actions';

const kityplanchoapi = new KityPlanchoAPI();

export const POSTCLIENTE = 'POSTCLIENTE';
export const POSTCLIENTESUCCESS = 'POSTCLIENTESUCCESS';
export const POSTCLIENTEERROR = 'POSTCLIENTEERROR';

export const postCliente = args => async dispatch =>{
    dispatch({ type: POSTCLIENTE });
    try {
        await kityplanchoapi.postCliente(args);
        dispatch({ type: POSTCLIENTESUCCESS });
    } catch (error) {
        return dispatch({ type: POSTCLIENTEERROR});
    }
    // * al registrar el cliente recargará los servicio activos
    return await dispatch(getAllServiciosActivos()) 
}
