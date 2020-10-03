import { row, col, css } from './utils';

function title(block) {
  const { tag = h1, styles } = block.options;

  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
  return row(col(`<p>${block.value}</p>`), css(block.options.styles));
}

function image(block) {
  const { styles, alt = '', imageStyles: is } = block.options;
  return row(`<img alt="${alt}" style="${css(is)}" src='${block.value}' />`, css(styles));
}

function columns(block) {
  //   const html = block.value.map((item) => col(item));
  const html = block.value.map(col).join('');
  return row(html, css(block.options.styles));
}

export const templates = {
  title,
  text,
  image,
  columns,
};
