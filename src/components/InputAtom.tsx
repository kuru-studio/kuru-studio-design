import * as React from 'react'
import styles from '../styles/InputAtom.module.css'

interface Props {
  text: string
}

export const InputAtom = ({ text }: Props) => {
  return <div className={styles.test}>Input Atom: {text}</div>
}
