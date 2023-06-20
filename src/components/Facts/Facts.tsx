import styles from './facts.module.css';

const Facts = () => {
  const words = [
    'apple',
    'banana',
    'color',
    'den',
    'england',
    'finland',
    'germany',
    'hightower',
  ];

  const findWord = (arr: string[], word: string, copyArr: string[]): any => {
    const tempArr = arr;
    const middle: number = Math.floor(arr.length / 2);
    const middleWord: string = tempArr[middle];
    if (tempArr[middle] === word) return copyArr.indexOf(middleWord);
    else if (tempArr[middle] < word)
      return findWord(tempArr.slice(middle), word, copyArr);
    else if (tempArr[middle] > word)
      return findWord(tempArr.slice(-middle), word, copyArr);
  };

  //findWord(words, "germany")
  //console.log(findWord(words, "england", words))

  const arr = [2, 16, 8, 4, 6, 1, 0, 5, 3, 11, 7, 9, 15, 12]

  //////////////////////////////////////////////////////////////////////////////////////


  // слияние массивов с одновременной сортировкой
// на вход подаются уже отсортированные левая и правая части 
function merge(left: any, right: any) {
  // сюда будем складывать результат
  let arr = []
  // пока в каждой части есть хотя бы один элемент — выполняем цикл
  while (left.length && right.length) {
      // смотрим на наименьший элемент из тех, что стоят в начале обоих массивов
      if (left[0] < right[0]) {
          // если слева был элемент меньше —
          // забираем его оттуда и отправляем в массив с результатом
          arr.push(left.shift())  
      } else {
          // в противном случае забираем элемент из правой части
          arr.push(right.shift()) 
      }
  }
  // выводим результат слияния отсортированных массивов
  console.log('Результат: ' + arr);

  // возвращаем отсортированный массив и добавляем к нему в конец отсортированный остаток от какой-либо части, если её так и не обработали в цикле
  return [ ...arr, ...left, ...right ]
}

// делим массивы пополам до тех пор, пока в них не останется элементов
function mergeSort(array: any): any {
const half = array.length / 2

// если в нашем массиве и так меньше двух элементов — возвращаем его
if(array.length < 2){
  return array 
}

// делим массив на две части и левую отправляем в новый массив
const left = array.splice(0, half)
// запускаем рекурсию и отдаём ей правую и левую части массива
return merge(mergeSort(left),mergeSort(array))
}

// исходный массив

//console.log(mergeSort(arr));


//////////////////////////////////////////////////////////////////////////////

function linearSearch(arr: any, target: any) {
 for (let i = 0; i <= arr.length; i++) {
  if (arr[i] === target) return i
 }
 return -1
}

//console.log(linearSearch([1, 2, 3, 4, 5], 5));


//////////////////////////////////////////////////////////////////////////////////


const data = 
[
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]


function calcAvgAge(array: any) {
  const avg = array.reduce((accum: any, curr: any) => {
   console.log(accum + curr.age)
  })
  return avg
}

//console.log(calcAvgAge(data))


  return (
    <div className={styles.facts}>
      <h2 className={styles.header}>
        Кокте́йль — напиток, получаемый смешиванием нескольких компонентов. Чаще
        всего коктейли представляют собой либо комбинацию спиртных напитков,
        либо один или несколько спиртных напитков, смешанных с другими
        ингредиентами, такими как фруктовый сок, ароматизированный сироп или
        сливки. Коктейли сильно различаются в разных регионах мира, и многие
        веб-сайты публикуют как оригинальные рецепты, так и свои собственные
        интерпретации старых и более известных коктейлей.
      </h2>
    </div>
  );
};

export default Facts;
