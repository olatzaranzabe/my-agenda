import React from 'react'
import { bind } from '../../../../utils/bind'
import styles from './task-input.module.css'

const cx = bind(styles)

export const TaskInput: React.FunctionComponent<{}> = ({ children }) => {
  return <div className={cx('task')}>
    <input className={cx('checkbox')} type="checkbox"/>
    <p>{children}</p>
  </div>
}