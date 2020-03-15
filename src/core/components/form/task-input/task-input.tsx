import React from 'react'
import { bind } from '../../../../utils/bind'
import styles from './task-input.module.css'

const cx = bind(styles)

interface Props  {
  value: string
  onChange(value: string): void
}

export const TaskInput: React.FunctionComponent<Props> = ({ value, onChange }) => {
  return <div className={cx('task')}>
    <input className={cx('checkbox')}
          type="checkbox"/>
    <input className={cx('task-input')} type="text"  value={value} onChange={event => onChange(event.target.value)}/>
  </div>
}