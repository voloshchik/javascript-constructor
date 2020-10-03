import image from '../assets/image.png';
import { Block } from './classes/blocks';

export const model = [
  new Block('title', 'Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'green',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),

  new Block('text', 'Конструктор сайтов на чистом JavaScript', {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),

  new Block('columns', ['111111111111', '222222222222', '333333333333'], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold',
    },
  }),
  new Block('image', image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Это картинка',
  }),
  new Block('text', 'Конструктор сайтов на чистом JavaScript', {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),
];
