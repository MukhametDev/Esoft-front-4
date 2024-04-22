import React, { useEffect, useState } from 'react';
import styles from './WindowSize.module.scss';

interface Sizes {
  width: number;
  height: number;
}

const WindowSize: React.FC = () => {
  const [size, setSize] = useState<Sizes>({
    width: innerWidth,
    height: innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: innerWidth,
        height: innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Размеры окна браузера</h2>
      <div className={styles.sizes}>
        <p className={styles.text}>
          Высота: <span className={styles.height}>{size.height}</span>
        </p>
        <p className={styles.text}>
          Ширина: <span className={styles.width}>{size.width}</span>
        </p>
      </div>
    </div>
  );
};

export default WindowSize;
