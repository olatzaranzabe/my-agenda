import React from 'react'

interface Props  {
    month: string
    label: string
    onChange(value: string): void
  }
  

export const MonthsList: React.FC<{
    onMonthClick(month: month): void
}> = ({ onMonthClick }) => {

    var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

    return (
        <ul>
            {monthNames.map(month => (
                <Month key={month} onClick={() => onMonthClick(month)} />
            ))}
        </ul>
    )
}