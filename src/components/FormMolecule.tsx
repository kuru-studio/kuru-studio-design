import * as React from 'react'
import styles from '../styles/FormMolecule.module.css'

interface Props {
  text: string
}

export const FormMolecule = ({ text }: Props) => {
  return <div className={styles.test}>Form Molecule: {text}</div>
}
