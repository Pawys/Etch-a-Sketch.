const container = document.querySelector('.container');
let boxnumber = 10;
for (let i = 0; i < boxnumber; i++){
  const column = document.createElement('div');
  column.classList.add('column');
  for (let i = 0; i < boxnumber; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    column.appendChild(div);
  }
  container.appendChild(column);
}
