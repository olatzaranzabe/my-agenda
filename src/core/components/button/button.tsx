import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './button.module.css'

const cx = bind(styles)

interface Props extends React.HTMLProps<HTMLButtonElement> {
    submit?: boolean
    className: string
}

export const Button: React.FC<Props> = ({
    children,
    className,
    submit
}) => {
    return (
        <button
            className={cx('button', className)}
            type={submit ? 'submit' : 'button'}
        >
            {children}
        </button>
    )
}