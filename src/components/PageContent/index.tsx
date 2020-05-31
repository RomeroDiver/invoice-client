import React, { FC } from 'react';
import styles from './index.module.css';

export const PageContent: FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
