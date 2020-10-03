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
    html = title(block);
  } else if (block.type === 'text') {
    html = text(block);
  } else if (block.type === 'columns') {
    html = columns(block);
  }
  $site.insertAdjacentHTML('beforeend', html);
});

function title(block) {
  return `
    <div class="row">
    <div class="col-sm"><h1>${block.value}</h1></div>
  </div>
    `;
}

function text(block) {
  return `
    <div class="row">
          <div class="col-sm">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto autem sit aperiam
              consequuntur.
            </p>
          </div>
        </div>
    `;
}

function columns(block) {
  let html = '';
  block.value.forEach((item) => {
    html += `
       <div class="col-sm">
         <p>
           ${item}
         </p>
       </div>
       
  `;
  });
  return `
  <div class="row">
         ${html}
        
  </div>
  `;
}
