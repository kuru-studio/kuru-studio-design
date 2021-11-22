import * as React from 'react'
import styles from '../styles/ExampleAtom.module.css'

interface Props {
  text: string
}

export const ExampleAtom = ({ text }: Props) => {
  return <div className={styles.test}>Example Atom: {text}</div>
}
