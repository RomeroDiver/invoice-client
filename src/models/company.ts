export class Company {
  public constructor(invoiceData?: Partial<Company>) {
    Object.assign(this, invoiceData);
  }

  public id: string = '';
  public name: string = '';
  public address: string = '';
  public city: string = '';
  public postalCode: string = '';
  public country: string = '';
  public orgNumber: string = '';
}
