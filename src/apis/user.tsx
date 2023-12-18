import { TEST_ACCOUNT } from './config';
import axios from 'axios';

export const checkUser = (address = TEST_ACCOUNT) => {
  axios.get('/user/check?address=' + address).then((res) => console.log(res.data));
};
