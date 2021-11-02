import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import styles from './FriendList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
