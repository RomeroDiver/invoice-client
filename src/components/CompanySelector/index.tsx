import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import _map from 'lodash/map';
import React, { ChangeEvent, FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Company } from '../../models/company';
import { companiesState } from '../../state/companies';
import styles from './index.module.css';

interface CompanySelectorProps {
  placeholder?: string;
  label?: string;
  value?: string;
  onCompanySelect: (value: Company) => void;
}

export const CompanySelector: FC<CompanySelectorProps> = ({
  placeholder,
  label,
  value = '',
  onCompanySelect,
}) => {
  const [companies, setCompanies] = useRecoilState(companiesState);
  const [newCompany, setNewCompany] = useState(new Company());
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const onFormInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewCompany({
      ...newCompany,
      [e.target.name]: e.target.value,
    });
  };
  const onFormCancel = () => {
    setShowCompanyForm(false);
    setNewCompany(new Company());
  };
  const onFormSubmit = () => {
    setCompanies([newCompany, ...companies]);
    onCompanySelect(newCompany);
    onFormCancel();
  };

  return (
    <section className={styles.root}>
      <FormControl fullWidth>
        <InputLabel id="companySelector-label">{label}</InputLabel>
        <Select fullWidth labelId="companySelector-label" value={value}>
          <MenuItem value="" disabled>
            <em>{placeholder}</em>
          </MenuItem>
          {companies.map((c) => (
            <MenuItem key={c.id} value={c.name}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {!showCompanyForm && (
        <Button color="primary" onClick={() => setShowCompanyForm(true)}>
          Add new
        </Button>
      )}
      {showCompanyForm && (
        <form className={styles.companyForm}>
          <Typography variant="overline">New company</Typography>
          {_map(newCompany, (value: string, key: string) => {
            if (key === 'id') return null;
            return (
              <FormControl fullWidth key={key} classes={{ root: styles.field }}>
                <TextField
                  label={key}
                  value={value}
                  onChange={onFormInputChange}
                  name={key}
                />
              </FormControl>
            );
          })}
          <div className={styles.buttonGroup}>
            <Button type="button" variant="contained" onClick={onFormCancel}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={onFormSubmit}
            >
              Add
            </Button>
          </div>
        </form>
      )}
    </section>
  );
};
