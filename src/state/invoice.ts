import { atom } from 'recoil';
import { Invoice } from '../models/invoice';

export const invoiceState = atom({
  key: 'invoiceState',
  default: new Invoice(),
});
