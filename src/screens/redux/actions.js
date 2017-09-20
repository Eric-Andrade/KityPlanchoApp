import { KityPlanchoAPI } from '../../util/api';

const kityplanchoapi = new KityPlanchoAPI();

export const FETCHPDP = 'FETCHPDP';

export const fetchPDP = () => ({
    type: FETCHPDP,
    payload: kityplanchoapi.getPDP()
})