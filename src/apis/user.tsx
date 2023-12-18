import { TEST_ACCOUNT } from './config';
import axios from 'axios';

export const checkUser = async (address = TEST_ACCOUNT) => {
  await axios.get('/user/check?address=' + address);
};
