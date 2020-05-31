import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, { FC } from 'react';
import styles from './index.module.css';

interface HeaderProps {
  readonly title: string;
  readonly onBackClick?: () => void
}

export const Header: FC<HeaderProps> = ({ title, onBackClick }) => {
  return (
    <header className={styles.root}>
      <IconButton aria-label="back" onClick={onBackClick}>
        <ArrowBackIosIcon />
      </IconButton>
      <h1 className={styles.title}>{title}</h1>
    </header>
  )
}
