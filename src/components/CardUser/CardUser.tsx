import React from 'react';
import styles from './CardUser.module.scss';

interface IPropsCardUser {
  name: string;
  phone: string;
  email: string;
  website: string;
}

const CardUser: React.FC<IPropsCardUser> = ({
  name,
  phone,
  email,
  website,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p>Телефон: {phone}</p>
        <p>Почта: {email}</p>
        <p>Website: {website}</p>
      </div>
    </li>
  );
};

export default CardUser;
