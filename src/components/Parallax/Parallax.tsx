import React from 'react';
import { Parallax } from 'react-parallax';
import Star from './../../image/stars.jpg';
import styles from './Parallax.module.scss';
import WindowSize from '../WindowSize/WindowSize';
import UserList from '../UserList/UserList';
import CountdownTimer from '../countDownTimer/CountdownTimer';

const ParallaxEffect: React.FC = () => {
  return (
    <Parallax bgImage={Star} strength={500}>
      <div className={styles.parallaxContainer}>
        <CountdownTimer />
        <UserList />
        <WindowSize />
      </div>
    </Parallax>
  );
};

export default ParallaxEffect;
