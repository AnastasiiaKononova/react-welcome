import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.scss';

const UserCard = (props) => { 
    // const {name: {first, last}, 
    // email, picture: {large: avatar}
    // } = props.user;
    
    return (
        <article  className={styles.card}>
            <img src="" className={styles.avatar}/>
            <h3>{props.user.name.first} {props.user.name.last}</h3>
            <p>{props.user.email}</p>
        </article>
    );
}


 const userPropTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string.isRequired,
            last: PropTypes.string.isRequired
        }).isRequired,
        email: PropTypes.string.isRequired,
        
    })
}


UserCard.propTypes = userPropTypes;

export default UserCard;