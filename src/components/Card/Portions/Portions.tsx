import { setConstantValue } from 'typescript';
import styles from './portions.module.css'
import { useEffect, useRef, useState } from 'react';

interface PortionsProps {
  volDec: React.MouseEventHandler<HTMLButtonElement>,
  volInc: React.MouseEventHandler<HTMLButtonElement>,
  currVol: number,
}

const Portions = ({volDec, volInc, currVol}: PortionsProps) => {
  


  return (
    <div className={styles.portions}>
      <label className={styles.label}>Порции</label>
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={volDec} >-</button>
        <p className={styles.button}>{currVol}</p>
        <button className={styles.button} onClick={volInc} >+</button>
      </div>
    </div>
  );
};

export default Portions;
