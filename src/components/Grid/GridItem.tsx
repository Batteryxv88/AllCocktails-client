import styles from './grid.module.css';
import { useAppDispatch } from '../../state/reduxHooks';
import { cardToggle } from '../../state/cardIsOpen/cardIsOpenActions';
import { Link } from 'react-router-dom';

interface GridItemProps {
  img: string,
  name: string,
  key: string,
  _id: string,
  class: string,
}

const GridItem = (props: GridItemProps) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(cardToggle(props._id));
  };

  return (
    <Link
      className={styles.link}
      key={props.name}
      to={`/${props.class}/${props.name}`}
    >
      <button
        className={styles.container}
        id={props._id}
        onClick={handleToggle}
      >
        <img
          src={props.img}
          className={styles.img}
          style={{ backgroundImage: `url(${props.img})` }}
        ></img>
        <h3 className={styles.header}>{props.name}</h3>
      </button>
    </Link>
  );
};

export default GridItem;
