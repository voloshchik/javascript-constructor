import { model } from './models';
import { templates } from './templates';
import './styles/main.css';
const $site = document.querySelector('#site');

model.forEach((block) => {
  // const toHTML = templates[block.type];

  $site.insertAdjacentHTML('beforeend', block.toHtml());
});
