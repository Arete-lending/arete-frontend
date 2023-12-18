import axios from 'axios';

export const BASE_URL = 'https://api.aretelending.xyz';
export const TEST_ACCOUNT = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';

axios.defaults.baseURL = BASE_URL;

export const addr = TEST_ACCOUNT;
// export const addr = localStorage.getItem('address');
