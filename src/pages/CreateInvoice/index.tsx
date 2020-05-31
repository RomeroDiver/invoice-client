import React, { Fragment } from 'react';
import { Header } from '../../components/Header';
import { InvoiceForm } from '../../components/InvoiceForm';
import { PageContent } from '../../components/PageContent';

export const CreateInvoicePage = () => {
  return (
    <Fragment>
      <Header title="Create invoice" />
      <PageContent>
        <InvoiceForm />
      </PageContent>
    </Fragment>
  );
};
