import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './button.module.css'

const cx = bind(styles)

interface Props {
    submit?: boolean
}

export const Button: React.FC<Props> = ({
    children,
    submit
}) => {
    return (
        <button
            className={cx('button', 'paper-btn')}
            type={submit ? 'submit' : 'button'}
        >
            {children}
        </button>
    )
}