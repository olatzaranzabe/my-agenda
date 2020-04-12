import React from 'react';
import styles from './base-input.module.css';
import { bind } from '../../../../utils/bind';

const cx = bind(styles);

interface Props {
  label: string;
  value: string;
  required?: boolean;
  type: 'text' | 'password';
  endSlot?: React.ReactNode;
  onChange(value: string): void;
}

export const BaseInput: React.FunctionComponent<Props> = ({
  label,
  value,
  onChange,
  required,
  type,
  endSlot
}) => {
  const isRequired = required && value === '';
  return (
    <label className={cx('label')}>
      <span className={cx('input-label')}>{label}</span>
      <input
        className={cx('input', { required: isRequired })}
        onChange={event => onChange(event.target.value)}
        value={value}
        type={type}
      />
      {required ? '*' : ''}
      <div className={cx('icon')}>{endSlot}</div>
    </label>
  );
};
