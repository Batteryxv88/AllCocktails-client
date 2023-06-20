import styles from './comments.module.css';
import Comment from './Comment/Comment';
import { CommentType } from '../../types/cocktails';
import { useState } from 'react';
import axios from 'axios';

interface CommentProps {
  comment: CommentType[];
}

const Comments = (props: CommentProps) => {
  const [val, setVal] = useState();

  const setInputHandler = (evt: any) => {
    setVal(evt.target.value);
  };

  const submitFormHandler = (evt: any) => {
    evt.preventDefault();
    const newCoctail = {}

    axios.post('http://localhost:3001/create', newCoctail);
  };

  return (
    <div className={styles.comments}>
      <div className={styles.wrapper}>
        <h4 className={styles.title}>Комментарии:</h4>
        <button className={styles.all}>Все комментарии</button>
      </div>
      {props.comment.length !== 0
        ? props.comment.map((item) => (
            <Comment
              id={item.id}
              author={item.author}
              comment={item.comment}
              date={item.date}
              icon={item.icon}
              key={item.id}
            />
          ))
        : []}
      <form className={styles.form} onSubmit={submitFormHandler}>
        <textarea
          onChange={setInputHandler}
          className={styles.input}
        ></textarea>
        <button className={styles.send}>Отправить</button>
      </form>
    </div>
  );
};

export default Comments;
