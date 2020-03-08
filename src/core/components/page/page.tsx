import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './page.module.css'

const cx = bind(styles)

interface Props  {
    className: string  
  }
  
 
  export const Page: React.FunctionComponent<Props> = ({
      children
    }) => {
      return (
          <div 
          className={cx('page')}
          >
          {children}
          </div>
      )
    };