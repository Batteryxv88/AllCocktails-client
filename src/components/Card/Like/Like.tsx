import styles from './like.module.css';

const Like = () => {
  return (
    <div className={styles.like}>
      <div className={styles.wrapper}>
        <label className={styles.label}>Нравится</label>
        <div className={styles.img}></div>
      </div>
    </div>
  );
};

export default Like;
