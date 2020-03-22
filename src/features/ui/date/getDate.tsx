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
    let fullDay = new Date();

    let today = String(fullDay.getDate()).padStart(2, '0') + '/' + String(fullDay.getMonth() + 1).padStart(2, '0') + '/' + fullDay.getFullYear();
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
        <GetDate>
            <div className={cx('date')}>{setDate}
            </div>
        </GetDate>
    )
}






