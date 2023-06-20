import styles from './header.module.css';
import '../../fonts/stylesheet.css';
import HeaderWide from './HeaderWide/HeaderWide';
import HeaderSlim from './HeaderSlim/HeaderSlim';
import { useResize } from '../../helpers/useResize';


const Header = () => {
  const { isScreenSl } = useResize();

  return (
    <div className={styles.header}>
     {isScreenSl? <HeaderWide />: <HeaderSlim />}
    </div>
  );
};

export default Header;
