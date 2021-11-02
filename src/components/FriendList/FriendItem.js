import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendItem = ({ id, avatar, name, isOnline }) => (
  <li className={styles.item} key={id}>
    <span className={isOnline ? styles['onLine'] : styles['offLine']}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
