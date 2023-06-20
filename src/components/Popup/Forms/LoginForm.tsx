import { passwordCheck, emailCheck } from './formConsts';
import { useAppDispatch, useAppSelector } from '../../../state/reduxHooks';
import {
  popupToggle,
  formToggle,
  popupClosed,
} from '../../../state/openPopup/openPopupActions';
import { useForm } from 'react-hook-form';
import styles from './form.module.css';
import { Link } from 'react-router-dom';
import { login } from '../../../actions/user';

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit= (data: any) => {
    dispatch(login(data.email, data.password));
    dispatch(popupToggle);
    dispatch(popupClosed);
    reset();
  };

  const popupCloseHandler = () => {
    dispatch(popupToggle);
    dispatch(popupClosed);
    reset();
  };

  const isPopupOpen = useAppSelector((store) => store.openPopup.isPopupOpen);

  return (
    <div className={isPopupOpen ? styles.active : ''}>
      <div className={styles.blur}>
        <div className={styles.form}>
          <div className={styles.title_wrapper}>
            <h1 className={styles.title}>Войти</h1>
            <Link
              className={styles.close}
              to="/"
              onClick={popupCloseHandler}
            ></Link>
          </div>
          <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.title_input}>Электронная почта</label>
            <input
            placeholder='example@bk.com'
              {...register('email', {
                required: 'Обязательное поле',
                pattern: {
                  value: emailCheck,
                  message: 'Введите корректный e-mail',
                },
                
              })}
              className={styles.input}
             
            ></input>
            <div className={styles.error_wrapper}>
              {errors?.email && (
                <p className={styles.report}>
                  {errors?.email?.message?.toString() || 'Ошибка'}
                </p>
              )}
            </div>
            <p className={styles.title_input}>Пароль</p>
            <input
              type="password"
              {...register('password', {
                required: 'Обязательное поле',
                pattern: {
                  value: passwordCheck,
                  message:
                    'Пароль должен содержать не меньше 8 символов верхнего и нижнего регистра, цифры а так же спецсимволы',
                },
              })}
              className={styles.input}
              //value={password}
              //onChange={(event) => {
              //setPassword(event.target.value);
              //}}
            ></input>
            <div className={styles.error_wrapper_last}>
              {errors?.password && (
                <p className={styles.report}>
                  {errors?.password?.message?.toString() || 'Ошибка'}
                </p>
              )}
            </div>
            <button disabled={!isValid} className={styles.button}>
              Войти
            </button>
          </form>

          <a
            className={styles.button_link}
            onClick={() => dispatch(formToggle)}
          >
            Зарегистрироваться
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
