import Facts from '../components/Facts/Facts';
import Grid from '../components/Grid/Grid';
import Header from '../components/Header/Header';
import Constructor from '../components/Constructor/Constructor';
import styles from './type.module.css';

const TypeOfCocktales = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Grid />
        <Constructor />
      </div>
    </>
  );
};

export default TypeOfCocktales;
