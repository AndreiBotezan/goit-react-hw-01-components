import PropTypes from 'prop-types';
import s from '../Friend/Friend.module.css';

export default function Friend({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.active : s.status}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};