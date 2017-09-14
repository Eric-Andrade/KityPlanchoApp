import { KityPlanchoAPI } from '../../util/api';

const kityplanchoapi = new KityPlanchoAPI();

export const FETCHCLIENTS = 'FETCHCLIENTS';

export const fetchClients = () => ({
    type: FETCHCLIENTS,
    payload: kityplanchoapi.getClients()
})