import { Company } from './company';

export enum PaymentType {
  cache = 'cache',
  transfer = 'transfer',
}

export class Invoice {
  public constructor(invoiceData?: Partial<Invoice>) {
    Object.assign(this, invoiceData);
  }

  public title: string = '';
  public seller: Company = new Company();
  public buyer: Company = new Company();
  public issueCity: string = '';
  public issueDate: Date | null = null;
  public deliveryDate: Date | null = null;
  public paymentType: PaymentType = PaymentType.transfer;
  public iban: string = '';
  public swift: string = '';
}
