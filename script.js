const container = document.querySelector('.container');
const columns = document.querySelectorAll('.column');
function createGrid(){
  removeAll()
  let boxnumber = getNumber();
  for (let i = 0; i < boxnumber; i++){
    const column = document.createElement('div');
    column.classList.add('column');
    for (let i = 0; i < boxnumber; i++){
      const div = document.createElement('div');
      div.classList.add('box');
      div.addEventListener("mouseover", () => {
        div.classList.add('boxhovered');
      });
      column.appendChild(div);
    }
    container.appendChild(column);
  }
}
function removeAll(){
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
function getNumber() {

  let number = prompt("Number of Boxes Per Side")
  while (number === null || number > 100 || number < 1|| number % 1 !== 0) {
   number = prompt("Number of Boxes Per Side");
  }
    return number;
}
