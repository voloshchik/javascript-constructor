import './styles/main.css';
import { Site } from './classes/site';
import { Sidebar } from './classes/sidebar';
import { model } from './models';

const site = new Site('#site');

site.render(model);

const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};
new Sidebar('#panel', updateCallback);
