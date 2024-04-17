import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardUser from '../CardUser/CardUser';
import styles from './UserList.module.scss';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios<User[]>(' https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className={styles.title}>Список пользователей</h2>
      <ul className={styles.lists}>
        {users.map((item) => {
          return (
            <CardUser
              key={item.id}
              name={item.name}
              email={item.email}
              phone={item.phone}
              website={item.website}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
