import styles from './box.module.css';

const Box = () => {
  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <label className={styles.label}>Добавить в бокс</label>
        <div className={styles.img}></div>
      </div>
    </div>
  );
};

export default Box;
