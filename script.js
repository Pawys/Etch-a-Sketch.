const container = document.querySelector('.container');
const columns = document.querySelectorAll('.column');
const rgbText = document.querySelector('.rgb');
const darkenText = document.querySelector('.darken');
let color = 200;
let rgb = 0;
let darken = 0;
let setRgb;
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
        if (rgb){
          let r = Math.floor(Math.random() * 257);
          let g = Math.floor(Math.random() * 257);
          let b = Math.floor(Math.random() * 257);
          setRgb = "rgb(" + r + ", " + g + ", " + b +")"
          div.style.backgroundColor = setRgb;
        }
        else if (darken) {
        color = 200 - 20;
        let rgb = getRGB(div.style.backgroundColor)
        if (rgb < 200){
          rgb = rgb - 20;
          setRgb = "rgb(" + rgb + ", " + rgb + ", " + rgb +")"
        }else{
        setRgb = "rgb(" + color + ", " + color + ", " + color +")"
        }
        div.style.backgroundColor = setRgb;
        console.log(div.style.backgroundColor);
        }else { 
           div.style.backgroundColor = "rgb(180, 180, 180)"
        }
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

  let number = prompt("Number of Boxes Per Side (100 max)")
  while (number === null || number > 100 || number < 1|| number % 1 !== 0) {
   number = prompt("Number of Boxes Per Side (100 max)");
  }
    return number;
}
function getRGB(rgb) {
const matches = rgb.match(/\d+/g);
  if (matches && matches.length >= 1) {
    return parseInt(matches[0]);
  } else {
    return 200;
  }
}
function rgbClick(){
  if (darken) {
    darkenClick()
  }
  if (rgb) {
    rgb = 0;
  rgbText.textContent = 'off';
  rgbText.style.color = "red";
  }else {
  rgb = 1;
  rgbText.textContent = 'on';
  rgbText.style.color = "green";

  }
}
function darkenClick(){
  if (rgb){
    rgbClick()
  }

  if (darken) {
    darken = 0;
  darkenText.textContent = 'off';
  darkenText.style.color = "red";
  }else {
  darken = 1;
  darkenText.textContent = 'on';
  darkenText.style.color = "green";

  }
}
