import * as React from 'react'
import styles from '../styles/FormMolecule.module.css'

interface Props {
  children: any
}

export const FormMolecule = ({ children }: Props) => {
  return (
    <div className={styles.test}>{ children }</div>
  )
}
