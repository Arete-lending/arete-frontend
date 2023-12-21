import axios from 'axios';
import { useEffect, useState } from 'react';

export const BASE_URL = 'https://api.aretelending.xyz';
export const TEST_ACCOUNT = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';
export const DOCS_URL =
  'https://arete-finance.gitbook.io/introduction/introduction/welcome-to-arete';

axios.defaults.baseURL = BASE_URL;

export const addr = TEST_ACCOUNT;
// export const addr = localStorage.getItem('address');

export const useAxios = <T>(endpoint: string, useAddress: boolean = false, deps: any[] = []) => {
  const [data, setData] = useState<T>();
  const url = useAddress ? endpoint + `?address=${addr}` : endpoint;
  const req = async () => {
    const res = await axios.get(url);
    setData(res.data);
  };
  useEffect(() => {
    req();
  }, deps);
  return data;
};
