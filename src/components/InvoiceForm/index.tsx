import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import React from 'react';
import { useRecoilState } from 'recoil';
import { Invoice, PaymentType } from '../../models/invoice';
import { invoiceState } from '../../state/invoice';
import { CompanySelector } from '../CompanySelector';
import styles from './index.module.css';

export const InvoiceForm = () => {
  const [invoice, setInvoice] = useRecoilState(invoiceState);
  const setValue = (name: keyof Invoice, value: any) =>
    setInvoice({
      ...invoice,
      [name]: value,
    });
  return (
    <div>
      <div className={styles.field}>
        <TextField
          onChange={(e) => setValue('title', e.target.value)}
          label="Title"
          fullWidth
          value={invoice.title}
          name="title"
        />
      </div>
      <div className={styles.field}>
        <CompanySelector
          label="Seller"
          placeholder="Select seller"
          value={invoice.seller.name}
          onCompanySelect={(value) => {
            setValue('seller', value);
          }}
        />
      </div>
      <div className={styles.field}>
        <CompanySelector
          label="Buyer"
          placeholder="Select buyer"
          onCompanySelect={(value) => {
            setValue('buyer', value);
          }}
        />
      </div>
      <div className={styles.field}>
        <TextField
          onChange={(e) => setValue('issueCity', e.target.value)}
          label="Issue city"
          fullWidth
          value={invoice.issueCity}
          name="issueCity"
        />
      </div>
      <div className={styles.field}>
        <KeyboardDatePicker
          fullWidth
          disableToolbar
          autoOk
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          label="Issue date"
          value={invoice.issueDate}
          onChange={(date) => setValue('issueDate', date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </div>
      <div className={styles.field}>
        <KeyboardDatePicker
          fullWidth
          disableToolbar
          autoOk
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          label="Delivery date"
          value={invoice.issueDate}
          onChange={(date) => setValue('deliveryDate', date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </div>
      <div className={styles.field}>
        <InputLabel id="invoicePaymentType-label">Payment type</InputLabel>
        <Select
          fullWidth
          labelId="invoicePaymentType-label"
          value={invoice.paymentType}
          classes={{ select: styles.capitalize }}
        >
          {Object.keys(PaymentType).map((pt) => (
            <MenuItem className={styles.capitalize} key={pt} value={pt}>
              {pt}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className={styles.field}>
        <TextField
          onChange={(e) => setValue('swift', e.target.value)}
          label="Swift"
          fullWidth
          value={invoice.issueCity}
          name="swift"
        />
      </div>
      <div className={styles.field}>
        <TextField
          onChange={(e) => setValue('iban', e.target.value)}
          label="Iban"
          fullWidth
          value={invoice.issueCity}
          name="iban"
        />
      </div>
    </div>
  );
};
