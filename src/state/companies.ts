import { atom } from 'recoil';
import { Company } from '../models/company';

const defaultCompanyList: Company[] = [];

export const companiesState = atom({
  key: 'companiesState',
  default: defaultCompanyList,
});
