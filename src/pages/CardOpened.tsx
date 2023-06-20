import Header from '../components/Header/Header';
import { useAppSelector } from '../state/reduxHooks';
import Card from '../components/Card/Card';
import Comments from '../components/Comments/Comments';

const CardOpened = () => {
  const coctails = useAppSelector((state) => state.cocktailsSlice.data);
  const isCardOpen = useAppSelector((state) => state.isCardOpen);

  return (
    <>
      <Header />
      {coctails.map((item) => {
        if (isCardOpen === item.id) {
          return (
            <>
              <Card
                name={item.name}
                ing={item.ingredients}
                desc={item.description}
                src={item.src_sqv}
                season={item.season}
                key={item.name}
              ></Card>

              {item.comment.length !== 0 ? (
                <Comments comment={item.comment} />
              ) : (
                <Comments comment={[]} />
              )}
            </>
          );
        }
      })}
    </>
  );
};

export default CardOpened;
