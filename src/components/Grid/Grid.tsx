import styles from './grid.module.css';
import GridItem from './GridItem';
import { useAppSelector } from '../../state/reduxHooks';

const Grid = () => {
  const filteredGrid = useAppSelector(
    (state) => state.filteredGridSlice.filter
  );
  const cocktails = useAppSelector((state) => state.cocktailsSlice.data);


  // фильтрация получаемого компонентом массива в зависимости от состояния фильтра
  const filterHandler = () => {
    const filter =
      filteredGrid === 'All'
        ? cocktails
        : filteredGrid === 'Strong'
        ? cocktails.filter((item) => item.clas === 'strong-alcohol')
        : filteredGrid === 'Low'
        ? cocktails.filter((item) => item.clas === 'low_alk')
        : cocktails.filter((item) => item.clas === 'non_alk');
    return filter;
  };

  return (
    <div className={styles.grid}>
      {filterHandler().length === 0 ? (
        <p>no item</p>
      ) : (
        filterHandler().map((item, index) => (
          <GridItem
            img={item.src_sqv}
            name={item.name}
            key={`gridItem${index + 1}`}
            _id={item.id}
            class={item.clas}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
