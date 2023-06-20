import './Slider.css';
import { useRef, useEffect, useState } from 'react';
import SliderItems from './SliderItems';
import { useAppSelector } from '../../state/reduxHooks';


const Slider = () => {
  const cocktails = useAppSelector((state) => state.cocktailsSlice.data);
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow')
      .then((res) => {
        return res.json();
      })
      .then((date) => setDate(date.datetime))
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }, []);


  let currentDate = new Date(date);
    const month = currentDate.getMonth() + 1;

    const summerArr = cocktails.filter((item) => item.season === 'summer');
    const fallArr = cocktails.filter((item) => item.season === 'fall');
    const winterArr = cocktails.filter((item) => item.season === 'winter');
    const springArr = cocktails.filter((item) => item.season === 'spring');

    const coctailsOfSeason =
      month === 6 || month === 7 || month === 8
        ? summerArr
        : month === 9 || month === 10 || month === 11
        ? fallArr
        : month === 12 || month === 1 || month === 2
        ? winterArr
        : month === 3 || month === 4 || month === 5
        ? springArr
        : '';

  const slider = useRef(null);
  let position = 0;
  // const currArr = Array.from(props.arr);

  


  // const prevHandler = () => {
  //   if (position === 0) {
  //     position = -(currArr.length - 1) * 1440;
  //     slider.current.childNodes.forEach((element) => {
  //       element.style.transform = `translateX(${position}px)`;
  //     });
  //   } else {
  //     position += 1440;
  //     slider.current.childNodes.forEach((element) => {
  //       element.style.transform = `translateX(${position}px)`;
  //     });
  //   }
  // };

  // const nextHandler = () => {
  //   if (position === -(currArr.length - 1) * 1440) {
  //     position = 0;
  //     slider.current.childNodes.forEach((element) => {
  //       element.style.transform = `translateX(${position}px)`;
  //     });
  //   } else {
  //     position -= 1440;
  //     slider.current.childNodes.forEach((element) => {
  //       element.style.transform = `translateX(${position}px)`;
  //     });
  //   }
  // };

  return (
    <div className="slider">
      <div className="slider__window" ref={slider}>
        {coctailsOfSeason? coctailsOfSeason.map((item, index) => (
          <SliderItems
            img={item.src}
            name={item.name}
            key={`gridItem${index + 1}`}
          />
        )) :  <p>no data</p>}
      </div>
      <button
        className="slider__button slider__button_type_prev"
        // onClick={prevHandler}
      ></button>
      <button
        className="slider__button slider__button_type_next"
        // onClick={nextHandler}
      ></button>
    </div>
  );
};

export default Slider;
