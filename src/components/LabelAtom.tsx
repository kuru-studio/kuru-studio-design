import * as React from 'react'
import styles from '../styles/LabelAtom.module.css'

interface Props {
  children?: any
  labelFor?: string
}

export const LabelAtom = ({ children, labelFor }: Props) => {
  return <label htmlFor={labelFor} className={styles.test}>{children}</label>
}
