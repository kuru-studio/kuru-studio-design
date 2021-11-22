import * as React from 'react'
import styles from '../styles/InputAtom.module.css'

interface Props {
  type?: string
  value?: string
  name?: string
}

export const InputAtom = ({ type, value, name }: Props) => {
  return <input className={styles.test} name={name} type={type} value={value} />
}
