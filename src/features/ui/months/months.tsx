import { bind } from '../../../utils/bind'
import styles from './months.module.css'
import React from 'react'

import { MonthsList } from '../months-list/months-list';

const cx = bind(styles)

interface Props {
    onMonthClick(): void
}

export const Months: React.FunctionComponent<Props> = ({ onMonthClick }) => (
    <MonthsList onMonthClick={onMonthClick}></MonthsList>
)