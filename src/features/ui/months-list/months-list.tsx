import React from 'react'
import { Month } from '../../domain/month'
import { Months } from '../months/months'
interface Props  {
    month: string
    label: string
    onClick(value: string): void
  }
  

export const MonthsList: React.FC<{
    onMonthClick(month: Month): void
}> = ({ onMonthClick }) => {

    var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

    return (
        <ul>
            {monthNames.map(month => (
                <Months key={month} onClick={() => onMonthClick(month)} />
            ))}
        </ul>
    )
}