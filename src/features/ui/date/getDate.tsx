import React, { useEffect, useState} from 'react'
import { bind } from '../../../utils/bind'
import styles from './getDate.module.css'

const cx = bind(styles)

interface Props {
    today: Date
    date: Date
    CalendarDate: number
    className: string  
}

export const GetDate: React.FunctionComponent<{}> = ({ children }) => {
    const today = new Date;
    const [currentDate, setDate] = useState(today);
  function updateDateIfChanged() {
    const newDate = today;

    if (newDate !== currentDate) {
      setDate(newDate);
    }
  }

  useEffect(() => {
    const intervalID = setInterval(updateDateIfChanged, 60000);
    return () => clearInterval(intervalID);
  }, []);
   
    return (
        <GetDate
            className={cx('date')}>
            <div value={currentDate}>{children}
            </div>
        </GetDate>
    )
}






