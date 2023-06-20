import { passwordCheck, emailCheck } from './formConsts';
import { useAppDispatch } from '../../../state/reduxHooks';
import { useForm } from 'react-hook-form';
import { popupToggle } from '../../../state/openPopup/openPopupActions';
import styles from './form.module.css';
import { Link } from 'react-router-dom';
import { registration } from '../../../actions/user';

const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
    setValue,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    registration(data.email, data.password);
    dispatch(popupToggle);
    reset();
  };

  const popupCloseHandler = () => {
    dispatch(popupToggle);
    reset();
  };

  return (
    <div className={styles.blur}>
      <div className={styles.form}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>Регистрация</h1>
          <Link
            to="/"
            className={styles.close}
            onClick={popupCloseHandler}
          ></Link>
        </div>
        <form className={styles.reg_form} onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.title_input}>Электронная почта</p>
          <input
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: emailCheck,
                message: 'Введите корректный e-mail',
              },
            })}
            className={styles.input}
            type="text"
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
          ></input>
          <div className={styles.error_wrapper}>
            {errors?.password && (
              <p className={styles.report}>
                {errors?.password?.message?.toString() || 'Ошибка'}
              </p>
            )}
          </div>
          <p className={styles.title_input}>Повторите пароль</p>
          <input
            type="password"
            {...register('confirm_password', {
              required: true,
              validate: (val) => {
                const { password } = getValues();
                return password === val || 'Пароли не совпадают';
              },
            })}
            className={styles.input}
          ></input>
          <div className={styles.error_wrapper}>
            {errors?.confirm_password && (
              <p className={styles.report}>
                {errors?.confirm_password?.message?.toString() ||
                  'Повторите пароль'}
              </p>
            )}
          </div>
          <button disabled={!isValid} className={styles.button} type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
