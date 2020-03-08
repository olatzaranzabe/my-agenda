import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './input.module.css'

const cx = bind(styles)

interface Props  {
    value: string
    label: string
    onChange(value: string): void
    required?: boolean
  }
  
 
  export const Input: React.FunctionComponent<Props> = ({
      onChange,
      label,
      value,
      required
    }) => {
      return (
          <label>
              {label}{required ? '*' : ''}
              <input
                value={value}
                className={cx('input', {required})}
                onChange={event => onChange(event.target.value)}
            />
            <span
            className={cx('hidden', {show: value.length === 0 })}
            >Campo requerido</span>
          </label>
        

      )
    };