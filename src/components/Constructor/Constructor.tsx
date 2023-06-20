import styles from './constructor.module.css';
import { useState } from 'react';
import InputComponent from './InputComponent/InputComponent';
import { useAppSelector, useAppDispatch } from '../../state/reduxHooks';
import AddedComponent from './AddedComponent/AddedComponent';
import { deleteAllIngredient } from '../../state/recipeConstructor/recipeConstructorSlice';
import { ObjectFlags } from 'typescript';

export type Filter = {
  value: string;
  componentsBase: string[];
  componentsFound: string[];
};

const Constructor = () => {
  const addedComponent = useAppSelector(
    (state) => state.recipeConstructorSlice.ingredients
  );

  const cocktails = useAppSelector((state) => state.cocktailsSlice.data);

  const dispatch = useAppDispatch();

  const words = ['водка', 'вода', 'джин', 'лимон', 'лимонад', 'лайм'];

  const [filter, setFilter] = useState<Filter>({
    value: '',
    componentsBase: words,
    componentsFound: [],
  });

  const handleSetComponent: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    const input = evt.currentTarget.value;
    const tmp =
      input.length === 0
        ? []
        : words.filter((item) => {
            return item.includes(input);
          });
    setFilter({
      ...filter,
      componentsFound: tmp,
      value: evt.currentTarget.value,
    });
  };

  const handleSearch = () => {
    const neArr = addedComponent.map((item) => item.name);

    const cocktailsArr = cocktails.map((obj) => {
      return { ...obj, ings: obj.ingredients.map((item) => item.name) };
    });

    const result = cocktailsArr.filter((item) =>
      neArr.every((ing) => item.ings.includes(ing))
    );
    console.log(neArr);
    console.log(cocktailsArr);
    console.log(result, 'result');
  };

  return (
    <div className={styles.constr}>
      <span className={styles.note}>КОКТЕЙЛЬ КОНСТРУКТОР</span>
      <div className={styles.inputwrap}>
        <input
          value={filter.value}
          className={styles.input}
          placeholder="+ апероль"
          onChange={handleSetComponent}
          type="text"
        ></input>
      </div>
      <div className={styles.clue}>
        {filter.componentsFound.length > 0
          ? filter.componentsFound.map((item: string) => {
              return (
                <InputComponent
                  data={item}
                  key={item}
                  setFilter={setFilter}
                  filter={filter}
                />
              );
            })
          : ''}
      </div>
      <div className={styles.wrapper1}>
        {addedComponent.map((item: any) => {
          return (
            <AddedComponent
              component={item['name']}
              key={item['id']}
              id={item['id']}
            />
          );
        })}
      </div>
      <div className={styles.button_box}>
        <button className={styles.button} onClick={handleSearch}>
          ПОДОБРАТЬ
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(deleteAllIngredient())}
        >
          СБРОС
        </button>
      </div>
    </div>
  );
};

export default Constructor;
