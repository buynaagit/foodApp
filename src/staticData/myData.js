import {images} from '../constants';
import {star1, star2, star3, star4, star5} from '../constants/icons';

export let food = [
  {
    datta: [
      {
        name: 'Pizza',
        selected: false,
        index: 1,
      },
      {
        name: 'Pasta',
        selected: false,
        index: 2,
      },
      {
        name: 'Steak',
        selected: false,
        index: 3,
      },
      {
        name: 'Salmon',
        selected: false,
        index: 4,
      },
    ],
  },
  {
    datta: [
      {
        name: 'Soup',
        selected: false,
        index: 5,
      },
      {
        name: 'Barbecue',
        selected: false,
        index: 6,
      },
      {
        name: 'Cheese',
        selected: false,
        index: 7,
      },
      {
        name: 'Milk',
        selected: false,
        index: 8,
      },
    ],
  },
  {
    datta: [
      {
        name: 'Raw',
        selected: false,
        index: 9,
      },
      {
        name: 'Fried',
        selected: false,
        index: 10,
      },
      {
        name: 'Egg',
        selected: false,
        index: 11,
      },
      {
        name: 'Veggie',
        selected: false,
        index: 12,
      },
      {
        name: 'Sweet',
        selected: false,
        index: 13,
      },
    ],
  },
  {
    datta: [
      {
        name: 'Spicy',
        selected: false,
        index: 14,
      },
      {
        name: 'Fried',
        selected: false,
        index: 15,
      },
      {
        name: 'Egg',
        selected: false,
        index: 16,
      },
      {
        name: 'Veggie',
        selected: false,
        index: 17,
      },
      {
        name: 'Chicken',
        selected: false,
        index: 18,
      },
    ],
  },
];

export let category = [
  {
    datta: [
      {
        name: 'American',
        selected: false,
        index: 1,
      },
      {
        name: 'Japanese',
        selected: false,
        index: 2,
      },
      {
        name: 'Mexican',
        selected: false,
        index: 3,
      },

      {
        name: 'Khaz',
        selected: false,
        index: 4,
      },
    ],
  },
  {
    datta: [
      {
        name: 'Germany',
        selected: false,
        index: 5,
      },
      {
        name: 'Italian',
        selected: false,
        index: 6,
      },
      {
        name: 'Swedish',
        selected: false,
        index: 7,
      },
      {
        name: 'Swedish',
        selected: false,
        index: 8,
      },
    ],
  },
  {
    datta: [
      {
        name: 'Mongolian',
        selected: false,
        index: 9,
      },
      {
        name: 'Chinese',
        selected: false,
        index: 10,
      },
      {
        name: 'Korean',
        selected: false,
        index: 11,
      },
      {
        name: 'African',
        selected: false,
        index: 12,
      },
    ],
  },
];

export let card = [
  {
    title: 'Korean',
    subtitle: 'Tofu Noodle Soup',
    img: images.tofu,
  },
  {
    title: 'Mongolian',
    subtitle: 'Traditional beef ribs',
    img: images.ribs,
  },
  {
    title: 'Chinese',
    subtitle: 'Dumplings with soy sauce',
    img: images.dumpling,
  },
  {
    title: 'Japanese',
    subtitle: 'Delicate sushi rolls',
    img: images.sushi,
  },
  {
    title: 'Russian',
    subtitle: 'Russian wheat krovski',
    img: images.wheat,
  },
  {
    title: 'Thai',
    subtitle: 'Thai stir fry',
    img: images.thai,
  },
];

export let foodList = [
  {
    title: 'Chicken Salad',
    subtitle: 'Special Food',
    img: 'https://images.unsplash.com/photo-1578687388049-079580e6eb2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    rating: '6.2K',
    desc: 'Master shifus handcrafted egg scrablming technique ',
    reviews: '(115 reviews)',
    star: star1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    severage: '2pp',
    preptime: '25m',
    cooktime: '10m',
    likes: '1229',
  },
  {
    title: 'Meat ball Pizza',
    subtitle: 'Family Food',
    img: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
    rating: '6.2K',
    desc: 'Nothing will be comparison for this pizza',
    reviews: '(4205 reviews)',
    star: star2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    severage: '2pp',
    preptime: '25m',
    cooktime: '20m',
    likes: '820',
  },
  {
    title: 'Vegan burger',
    subtitle: 'Vegan Food',
    img: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    rating: '3.4K',
    desc: 'Vegan burger also called nonfat burger',
    reviews: '(905 reviews)',
    star: star4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    severage: '3pp',
    preptime: '15m',
    cooktime: '15m',
    likes: '150',
  },
  {
    title: 'Mexican taco',
    subtitle: 'Spicy Food',
    img: 'https://images.unsplash.com/photo-1593759608136-45eb2ad9507d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80',
    rating: '2.1K',
    desc: 'Iconic mexican true Taco at home',
    reviews: '(9205 reviews)',
    star: star5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    severage: '1pp',
    preptime: '10m',
    cooktime: '18m',
    likes: '2500',
  },
  {
    title: 'Grilled beef',
    subtitle: 'Fried Food',
    img: 'https://images.unsplash.com/photo-1580554530778-ca36943938b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    rating: '7.1K',
    desc: 'Grilled beef is most tradionaly notable food',
    reviews: '(1205 reviews)',
    star: star3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    severage: '2pp',
    preptime: '30m',
    cooktime: '35m',
    likes: '9200',
  },
];
