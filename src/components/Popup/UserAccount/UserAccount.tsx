import styles from './userAccount.module.css';
import { useAppSelector, useAppDispatch } from '../../../state/reduxHooks';
import userReducer from '../../../state/user/userReducer';
import { logout } from '../../../state/user/userReducer';

const UserAccount = ({ setVisible }: any) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.currentUser.email);
  //console.log(user)
  const logoutHandler = () => {
    dispatch(logout());
    setVisible(false);
  };

  return (
    <div className={styles.account}>
      <span className={styles.username}>{user}</span>
      <div className={styles.wrapper1}>
        <button className={styles.button}>Настройки</button>
        <button className={styles.button}>Мои коктейли</button>
        <button className={styles.button}>Понравившиеся</button>
      </div>
      <button className={styles.goout} onClick={logoutHandler}>
        Выйти
      </button>
    </div>
  );
};

export default UserAccount;
