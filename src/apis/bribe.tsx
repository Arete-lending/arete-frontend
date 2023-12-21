import { useAxios } from './config';

interface BribeTableRow {
  'B&I': string;
  TB: string;
  TBC: string;
  TV: string;
  TVP: string;
  VAPR: string;
  asset: string;
  desc: string;
  token: string;
}

export const getBribeTable = (deps: any[] = []) => {
  return useAxios<BribeTableRow[]>('/bribe/content', true, deps);
};
