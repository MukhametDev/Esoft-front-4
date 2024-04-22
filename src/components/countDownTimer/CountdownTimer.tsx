import React, { useEffect, useState } from 'react';
import styles from './CountdownTimer.module.scss';

interface IPropsCountdownTimer {}

const CountdownTimer: React.FC<IPropsCountdownTimer> = () => {
  const [timer, setTimer] = useState<number>(10);
  useEffect(() => {
    if (timer === 0) return;
    const id = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [timer]);
  return (
    <div className={styles.timer}>
      <div className={styles.title}>Таймер</div>
      <p className={styles.text}>
        Текущее значение: <span className={styles.number}>{timer}</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
