import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendListItem.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friend__list}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendList;
