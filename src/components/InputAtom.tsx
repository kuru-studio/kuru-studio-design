import * as React from 'react'
import styles from '../styles/InputAtom.module.css'

interface Props {
  type: string
  value: string
}

export const InputAtom = ({ type, value }: Props) => {
  return <input className={styles.test} type={type} value={value} />
}
