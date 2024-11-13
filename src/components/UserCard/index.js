import React from 'react';
import styles from './UserCard.module.css';

const UserCard = (props) => {
    const {name: {first, last}, 
    email, picture: {large: avatar}
    } = props.user;
    
    return (
        <article  className={styles.card}>
            <img src={avatar} />
            <h3>{first} {last}</h3>
            <p>{email}</p>
        </article>
    );
}
export default UserCard;