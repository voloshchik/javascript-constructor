import { model } from './models';
import { templates } from './templates';
import './styles/main.css';
import { Site } from './classes/site';
const site = new Site('#site');

site.render(model);

// model.forEach((block) => {
//   // const toHTML = templates[block.type];
//   if (toHTML) {
//     $site.insertAdjacentHTML('beforeend', block.toHtml());
//   }
// });
