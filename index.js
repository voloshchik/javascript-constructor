const model = [
  {
    type: 'title',
    value: 'Hello world from js',
  },
  { type: 'text', value: 'here we go with some text' },
  { type: 'columns', value: ['111111111111', '222222222222', '333333333333'] },
];

const $site = document.querySelector('#site');

model.forEach((block) => {
  console.log(block);

  let html = '';

  if (block.type === 'title') {
    html = `
      <div class="row">
      <div class="col-sm"><h1>${block.value}</h1></div>
    </div>
      `;
  } else if (block.type === 'text') {
    html = `
      <div class="row">
          <div class="col-sm">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto autem sit aperiam
              consequuntur.
            </p>
          </div>
        </div>
      `;
  } else if (block.type === 'columns') {
    html = `
      <div class="row">
          <div class="col-sm">
            <p>
              ${block.value[0]}
            </p>
          </div>
          <div class="col-sm">
            <p>
            ${block.value[1]}
            </p>
          </div>
          <div class="col-sm">
            <p>
            ${block.value[2]}
            </p>
          </div>
        </div>
      `;
  }
  $site.insertAdjacentHTML('beforeend', html);
});
