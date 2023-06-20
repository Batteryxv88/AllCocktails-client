import styles from './comment.module.css';

interface CommentProps {
  id: number;
  author: string;
  date: Date;
  comment: string;
  icon: string;
}

const Comment = (props: CommentProps) => {

  const date = new Date(props.date)
  console.log(props.date)
  return (
    <div className={styles.commentBox}>
      <div className={styles.box}>
        <img className={styles.img} src={props.icon} ></img>
        <div className={styles.wrapper}>
          <h4 className={styles.name}>{props.author}</h4>
          <p className={styles.date}>{date.toLocaleDateString()}</p>
        </div>
      </div>
      <p className={styles.comment}>{props.comment}</p>
    </div>
  );
};

export default Comment;
