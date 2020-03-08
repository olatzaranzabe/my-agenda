import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './icon.module.css'

const cx = bind(styles)

type IconName = 'check' | 'cross' | 'openEye' | 'closedEye'

type Size = 's' | 'm' | 'l'
interface Props {
  name: IconName
  onClick?(): void
  size?: Size
}

const icons: Record<IconName, string> = {
  check: '✅',
  cross: '❌',
  openEye: '◎',
  closedEye: '◉'
}

export const Icon: React.FunctionComponent<Props> = ({ name, size = 'm', onClick }) => {
  return (
    <i onClick={onClick} className={cx('icon', `icon-size-${size}`)}>
      {icons[name]}
    </i>
  )
}