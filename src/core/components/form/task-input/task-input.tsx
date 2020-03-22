import React, { useState } from 'react'
import { bind } from '../../../../utils/bind'
import styles from './task-input.module.css'

const cx = bind(styles)

interface Props {
  value: string
  onClick?(): any
  onChange?(): string
}

export const TaskInput: React.FC<Props> = ({ value, onChange, onClick}) => {
  const [inputValue, setInputValue] = useState<string>("");

  return <div>
    <form action="">
      <input className={cx('checkbox')}
          type="checkbox"/>
      <input className={cx('task-input')} type="text"  value={inputValue} onChange={event => setInputValue(event.target.value)}/>
      <button type="submit" onClick={onClick} >Add</button>
    </form>
  </div>
}