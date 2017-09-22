import { KityPlanchoAPI } from '../../util/api';

const kityplanchoapi = new KityPlanchoAPI();

export const FETCHALLPDPR = 'FETCHALLPDPR';

export const fetchALLPDPR = () => ({
    type: FETCHALLPDPR,
    payload: kityplanchoapi.getALLPDPR()
})

export const FETCHONEPDPR = 'FETCHONEPDPR';

export const fetchONEPDPR = () => ({
    type: FETCHONEPDPR,
    payload: kityplanchoapi.getONEPDPR()
})

export const FETCHALLSERVICIOSACTIVOS = 'FETCHALLSERVICIOSACTIVOS';

export const getAllServiciosActivos = () => ({
    type: FETCHALLSERVICIOSACTIVOS,
    payload: kityplanchoapi.getAllServiciosActivos()
})