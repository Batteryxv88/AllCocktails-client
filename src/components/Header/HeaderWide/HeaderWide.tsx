import { Link } from 'react-router-dom';
import { setFilter } from '../../../state/filteredItem/filteredGridSlice';
import { useAppDispatch, useAppSelector } from '../../../state/reduxHooks';
import { popupToggle } from '../../../state/openPopup/openPopupActions';
import styles from './headerWide.module.css';
import UserAccount from '../../Popup/UserAccount/UserAccount';
import { useState } from 'react';

const HeaderWide = () => {
  const dispatch = useAppDispatch();
  const isPopupOpen = useAppSelector((store) => store.openPopup.isPopupOpen);
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const [isAccVisible, setVisible] = useState(false)

  const showUserAccount = () => {
    setVisible(!isAccVisible)
  };

  return (
    <div className={styles.header} >
      <div className={styles.nav}>
        <Link
          className={styles.nav_title}
          to="/"
          onClick={() => dispatch(setFilter('All'))}
        >
          домой
        </Link>
        <Link
          className={styles.nav_title}
          to="/strong-alcohol"
          onClick={() => dispatch(setFilter('Strong'))}
        >
          крепкие
        </Link>
        <Link
          className={styles.nav_title}
          to="/low-alcohol"
          onClick={() => dispatch(setFilter('Low'))}
        >
          слабоалкогольные
        </Link>
        <Link
          className={styles.nav_title}
          to="/non-alcoholic"
          onClick={() => dispatch(setFilter('Non'))}
        >
          безалкогольные
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.search}>
          <div className={styles.search__icon}></div>
          <span className={styles.search__span}>Поиск</span>
        </div>
        <div className={styles.entry}>
          {!isAuth && (
            <button
              className={styles.link}
              onClick={() => dispatch(popupToggle)}
            >
              войти
            </button>
          )}
          {isAuth && (
            <div className={styles.cabinet}>
              <div className={styles.like}></div>
              <div className={styles.img} onClick={showUserAccount}></div>
            </div>
          )}
        </div>
        {isAccVisible && <UserAccount setVisible={setVisible} />}
        
      </div>
      
    </div>
  );
};

export default HeaderWide;
