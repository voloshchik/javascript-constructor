import image from '../assets/image.png';

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов на чистом JavaScript',
    options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: 'green',
        padding: '1.5rem',
        'text-align': 'center',
      },
    },
  },
  {
    type: 'text',
    value: 'Конструктор сайтов на чистом JavaScript',
    options: {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold',
      },
    },
  },
  {
    type: 'columns',
    value: ['111111111111', '222222222222', '333333333333'],
    options: {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    },
  },
  {
    type: 'image',
    value: image,
    options: {
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
    },
  },
];
