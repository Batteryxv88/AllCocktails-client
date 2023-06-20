import { CocktalesArr } from "../types/cocktails";

const coctailsArr: CocktalesArr[] = [
  {
    name: 'Негрони',
    id: 'a1',
    season: 'winter',
    src: 'https://i.ibb.co/HxZT3Bg/negroni.jpg',
    src_sqv: 'https://i.ibb.co/k0yH0kb/negroni-sqv.jpg',
    clas: 'strong-alcohol',
    description:
      'Бокал для подачи наполнить кубиками льда. Влить биттер. Перемешать лед, добавить остальные ингредиенты и дольку апельсина, снова перемешать и украсить апельсиновой цедрой. «Негрони» нужно смешивать и выпивать немедленно, чтобы лед не начал таять и разбавлять вкус коктейля.',
    ingredients: [
      {
        name: 'джин',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'белый вермут',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'горький вермут',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'апельсин',
        vol: 1,
        measure: 'шт',
      },
      {
        name: 'ангостура',
        vol: 1,
        measure: 'мл',
      },
    ],
    comment: [
      {
      id: 1,
      author: 'Дарина',
      date: new Date(),
      comment: 'Хороший коктейльчик',
      icon: 'https://i.ibb.co/M5zKzfv/user.png',
    },
    {
      id: 2,
      author: 'Максим',
      date: new Date(),
      comment: "Слишком сладкий, но вобщем ничего.",
      icon: "https://i.ibb.co/M5zKzfv/user.png"
  }
],
  },

  {
    name: 'Сазерак',
    id: 'a2',
    season: 'winter',
    src: 'https://i.ibb.co/8K5fyfN/sazerac.jpg',
    src_sqv: 'https://i.ibb.co/4J8cPN2/sazerac-sqv.jpg',
    clas: 'strong-alcohol',
    description:
      'Бокал рокс наполняем льдом, наливаем абсент и воду без газа. В стакан для смешивания кладем кубик сахара, пропитываем его битером и ангостурой, давим мадлером. В стакан для смешивания добавляем коньяк и бурбон, наполняем кубиками льда и размешиваем коктейльной ложкой. Добавлям содержимое рокса  и перемешиваем. Бокал для напитка ароматизируем и переливаем в него через стрейнер содержимое стакана для смешивания. Рокс украшаем цедрой лимона.',
    ingredients: [
      {
        name: 'коньяк',
        vol: 45,
        measure: 'мл',
      },
      {
        name: 'бурбон',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'абсент',
        vol: 15,
        measure: 'мл',
      },
      {
        name: 'вода без газа',
        vol: 10,
        measure: 'мл',
      },
      {
        name: 'биттер Пишо',
        vol: 3,
        measure: 'мл',
      },
      {
        name: 'ангостура',
        vol: 3,
        measure: 'мл',
      },
      {
        name: 'кубики сахара',
        vol: 5,
        measure: 'г',
      },
      {
        name: 'цедра лимона',
        vol: 1,
        measure: 'шт',
      },
      {
        name: 'кубики льда',
        vol: 400,
        measure: 'г',
      },
    ],
    comment: []
  },

  {
    name: 'Белый русский',
    id: 'a3',
    season: 'fall',
    src: 'https://i.ibb.co/30B2BMj/white-russian.jpg',
    src_sqv: 'https://i.ibb.co/5Rk4hsF/white-russian-sqv.jpg',
    clas: 'strong-alcohol',
    description:
      'Взять бокал и наполнить его льдом доверху. Налить кофейный ликер, налить водку. Налить жирные сливки, перемешать и подавать.',
    ingredients: [
      {
        name: 'жирные сливки',
        vol: 20,
        measure: 'мл',
      },
      {
        name: 'водка',
        vol: 50,
        measure: 'мл',
      },
      {
        name: 'кофейный ликер',
        vol: 30,
        measure: 'мл',
      },
    ],
    comment: []
  },

  {
    name: 'Апероль шприц',
    id: 'a4',
    season: 'summer',
    src: 'https://i.ibb.co/hR2mNBy/aperol.jpg',
    src_sqv: 'https://i.ibb.co/vHHnrBX/aperol-spritz-sqv.jpg',
    clas: 'low_alk',
    description:
      'Подготовить все ингредиенты. В бокал со льдом влить просекко, апероль и газированную воду. Перемешать барной ложкой. В бокал можно положить и дольку апельсина. Готово к подаче!',
    ingredients: [
      {
        name: 'просекко',
        vol: 100,
        measure: 'мл',
      },
      {
        name: 'газированная вода',
        vol: 50,
        measure: 'мл',
      },
      {
        name: 'цедра апельсина',
        vol: null,
        measure: 'по вкусу',
      },
      {
        name: 'апперитив апероль',
        vol: 50,
        measure: 'мл',
      },
    ],
    comment: []
  },

  {
    name: 'Мохито',
    id: 'a5',
    season: 'summer',
    src: 'https://i.ibb.co/9yS6P2J/Mojito.jpg',
    src_sqv: 'https://i.ibb.co/jgtrhK4/mohito-sqv.jpg',
    clas: 'low_alk',
    description:
      'В высокий бокал положите нарезанный дольками лайм, веточки мяты и сахар. Толкушкой немного раздавите все, чтобы лайм и мята пустили сок. Смешайте оба рома и влейте в бокал. Затем добавьте немного Спрайта и немного шампанского.',
    ingredients: [
      {
        name: 'свежая мята',
        vol: 6,
        measure: 'стеблей',
      },
      {
        name: 'сахар',
        vol: 2,
        measure: 'ст. ложки',
      },
      {
        name: 'лайм',
        vol: 1,
        measure: 'шт',
      },
      {
        name: 'ром Баккарди лимон',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'белый ром',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'спрайт',
        vol: null,
        measure: 'по вкусу',
      },
      {
        name: 'сухое шампанское',
        vol: null,
        measure: 'по вкусу',
      },
    ],
    comment: []
  },

  {
    name: 'Виски кола',
    id: 'a6',
    season: 'summer',
    src: 'https://wallup.net/wp-content/uploads/2019/09/930248-liquor-alcohol-spirits-poster-drinks-drink-whiskey.jpg',
    src_sqv: 'https://i.ibb.co/Phnpsc4/whiskey-sqv.jpg',
    clas: 'strong-alcohol',
    description:
      'Наполните бокал кубиками льда, добавьте виски и колу. Смешайте все ингредиенты. Украсьте долькой лимона или веточкой мяты. Для коктейля лучше взять охлажденные и сухие хайболы или другие стаканы среднего объема. Используйте охлажденную и невыдохшуюся Coca-Cola. Углекислота придает смеси приятный вкус, теплая кола без газа подчеркивает резкий алкогольный запах, пить напиток неприятно.',
    ingredients: [
      {
        name: 'виски',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'кока-кола',
        vol: 70,
        measure: 'мл',
      },
      {
        name: 'лед в кубиках',
        vol: null,
        measure: 'полный бокал',
      },
    ],
    comment: []
  },

  {
    name: 'Лонг айлэнд',
    id: 'a7',
    season: 'summer',
    src: 'https://i.ibb.co/m9PxbB7/long-island.jpg',
    src_sqv: 'https://i.ibb.co/gJKSysH/Long-Island-sqv.jpg',
    clas: 'low_alk',
    description:
      'В джиггере смешать водку, светлый ром, джин, текилу, куантро. Затем добавить свежевыжатый лимонный сок и 5-7 мл сахарного сиропа. Лед лучше использовать кубиком, фраппе слишком быстро тает и разбавляет коктейль, нам это совершенно не нужно. Добавить совсем немного колы, просто для цвета. Подавать как во времена сухого закона — в небольшом чайнике. Налить в чашку и положить небольшой кусочек лимона.',
    ingredients: [
      {
        name: 'водка',
        vol: 25,
        measure: 'мл',
      },
      {
        name: 'светлый ром',
        vol: 25,
        measure: 'мл',
      },
      {
        name: 'джин',
        vol: 25,
        measure: 'мл',
      },
      {
        name: 'текила',
        vol: 25,
        measure: 'мл',
      },
      {
        name: 'куантро',
        vol: 25,
        measure: 'мл',
      },
      {
        name: 'лимонный сок',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'сахарный сироп',
        vol: 6,
        measure: 'мл',
      },
      {
        name: 'кока-кола',
        vol: null,
        measure: 'по вкусу',
      },
    ],
    comment: []
  },

  {
    name: 'Кузнечик',
    id: 'a8',
    season: 'summer',
    src: 'https://i.ibb.co/F3cf0kP/Grasshopper.jpg',
    src_sqv: 'https://i.ibb.co/SRZJ80b/Grasshopper-sqv.jpg',
    clas: 'strong-alcohol',
    description:
      'Налить в шейкер нежирные сливки, мятный ликер зеленый и какао ликер светлый. Затем наполнить шейкер кубиками льда и взбить. Перелить через стрейнер в охлажденный коктейльный бокал и украсить литиками мяты',
    ingredients: [
      {
        name: 'какао ликер светлый',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'мятный ликер зеленый',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'нежирные сливки',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'мята',
        vol: 1,
        measure: 'стебель',
      },
      {
        name: 'лед в кубиках',
        vol: 200,
        measure: 'гр',
      },
    ],
    comment: []
  },

  {
    name: 'Авиация',
    id: 'a9',
    season: 'summer',
    src: 'https://i.ibb.co/f8szKBc/aviation.jpg',
    src_sqv: 'https://i.ibb.co/T4j3rmy/aviation-sqv.jpg',
    clas: 'strong-alcohol',
    description:
      'Налить в стакан для смешивания лимонный сок, ликер мараскино, фиалковый ликер и джин. Наполнить стакан кубиками льда и аккуратно размешать коктейльной ложкой. Перелить через стрейнер в охлажденный коктейльный бокал, украсить коктейльной вишней',
    ingredients: [
      {
        name: 'сухой джин',
        vol: 50,
        measure: 'мл',
      },
      {
        name: 'ликер мараскино',
        vol: 20,
        measure: 'мл',
      },
      {
        name: 'фиалковый ликер',
        vol: 5,
        measure: 'мл',
      },
      {
        name: 'лимонный сок',
        vol: 15,
        measure: 'мл',
      },
      {
        name: 'лед в кубиках',
        vol: 300,
        measure: 'гр',
      },
      {
        name: 'красная коктейльная вишня',
        vol: 1,
        measure: 'шт',
      },
    ],
    comment: []
  },

  {
    name: 'Роза',
    id: 'a10',
    season: 'summer',
    src: 'https://i.ibb.co/41NHy7Z/rose.jpg',
    src_sqv: 'https://i.ibb.co/KybkvYd/rose-sqv.jpg',
    clas: 'strong-alcohol',
    description:
      'Положить в один из стаканов шейкера лед, влить вермут, ­киршвассер и сироп. Перелить через стрейнер в другой стакан. Потом перелить обратно — и повторить процедуру несколько раз, постоянно увеличивая расстояние между стаканами, то есть поднимая их друг над другом все выше. Перелить в охлажденный коктейльный бокал. Украсить лимонной цедрой. Малиновый сироп могут заменить шесть ягод малины, размятые в шейкере с небольшим количеством сахара.',
    ingredients: [
      {
        name: 'сухой вермут',
        vol: 60,
        measure: 'мл',
      },
      {
        name: 'кирш',
        vol: 30,
        measure: 'мл',
      },
      {
        name: 'малиновый сироп',
        vol: 5,
        measure: 'мл',
      },
      {
        name: 'лимонная цедра',
        vol: null,
        measure: 'по вкусу',
      },
    ],
    comment: []
  },

  {
    name: 'Грог',
    id: 'a11',
    season: 'fall',
    src: 'https://i.ibb.co/FDghykh/grog.jpg',
    src_sqv: 'https://i.ibb.co/xM9Nc7F/grog-sqv.jpg',
    clas: 'strong-alcohol',
    description:
      'Довести воду до кипения, добавить чай, сахар и все специи. Влить ром. Довести всё до кипения, сразу же снять и накрыть крышкой. Дать настояться 10-15 мин и сразу же употребить',
    ingredients: [
      {
        name: 'анис (бадьян)',
        vol: 6,
        measure: 'шт',
      },
      {
        name: 'вода',
        vol: 600,
        measure: 'мл',
      },
      {
        name: 'чай',
        vol: 2,
        measure: 'ст. ложки',
      },
      {
        name: 'сахар',
        vol: 5,
        measure: 'ст. ложек',
      },
      {
        name: 'черный душистый перец',
        vol: 4,
        measure: 'шт',
      },
      {
        name: 'гвоздика',
        vol: 3,
        measure: 'шт',
      },
      {
        name: 'черный перец горошком',
        vol: 3,
        measure: 'шт',
      },
      {
        name: 'корица',
        vol: null,
        measure: 'на кончике ножа',
      },
      {
        name: 'мускатный орех',
        vol: null,
        measure: 'на кончике ножа',
      },
      {
        name: 'лавровый лист',
        vol: null,
        measure: 'по вкусу',
      },
      {
        name: 'темный ром',
        vol: 1000,
        measure: 'мл',
      },
    ],
    comment: []
  },

  {
    name: 'Шмель',
    id: 'a12',
    season: 'summer',
    src: 'https://i.ibb.co/WP4RZ5Q/bumblebee.jpg',
    src_sqv: 'https://i.ibb.co/VQ9MwWQ/bumblebee-sqv.jpg',
    clas: 'non_alk',
    description:
      'Наполните хайбол льдом доверху, на лед налейте карамельный сироп, апельсиновый сок и кофе (чтобы слои не смешивались, это удобнее всего наливать «через» чайную ложку). Украсьте дольками апельсина. Если не хотите портить красоту, то ложкой лучше не размешивать — пейте через трубочку.',
    ingredients: [
      {
        name: 'эспрессо',
        vol: 50,
        measure: 'мл',
      },
      {
        name: 'апельсиновый сок',
        vol: 100,
        measure: 'мл',
      },
      {
        name: 'карамельный сироп',
        vol: 15,
        measure: 'мл',
      },
      {
        name: 'лед в кубиках',
        vol: 200,
        measure: 'гр',
      },
      {
        name: 'апельсины',
        vol: 2,
        measure: 'шт',
      },
    ],
    comment: []
  },
];

export default coctailsArr;
