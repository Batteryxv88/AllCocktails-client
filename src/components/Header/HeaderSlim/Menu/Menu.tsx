import styles from './menu.module.css';
import { setActive } from '../../../../state/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '../../../../state/reduxHooks';
import { Link } from 'react-router-dom';
import { setFilter } from '../../../../state/filteredItem/filteredGridSlice';

const Menu = () => {
  const isActive = useAppSelector((store) => store.menu.menuActive);
  const dispatch = useAppDispatch();

  return (
    <div
      className={isActive ? styles.menu + ' ' + styles.active : styles.menu}
      onClick={() => {
        dispatch(setActive());
      }}
    >
      <div className={styles.blur}></div>
      <div
        className={styles.menu__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={styles.close}
          onClick={() => dispatch(setActive())}
        ></div>
        <div className={styles.ul}>
          <Link
            className={styles.li}
            to="/"
            onClick={() => {dispatch(setFilter('All')); dispatch(setActive());}}
          >
            домой
          </Link>
          <Link
            className={styles.li}
            to="/strong-alcohol"
            onClick={() => {dispatch(setFilter('Strong')); dispatch(setActive());}}
          >
            крепкие
          </Link>
          <Link
            className={styles.li}
            to="/low-alcohol"
            onClick={() => {dispatch(setFilter('Low')); dispatch(setActive());}}
          >
            слабоалкогольные
          </Link>
          <Link
            className={styles.li}
            to="/non-alcoholic"
            onClick={() => {dispatch(setFilter('Non')); dispatch(setActive())}}
          >
            безалкогольные
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
