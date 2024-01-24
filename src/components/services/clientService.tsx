import axios from 'axios'

const client = axios.create({
    baseURL: 'https://gelato-backend-fo49-48ybe5vxh-cardiscardis.vercel.app',
    timeout: 2000
});


export default client;