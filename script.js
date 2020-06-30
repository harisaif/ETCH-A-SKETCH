const container = document.querySelector('div');
let grid = '';
container.style.width = '545px';
container.style.height = '510px';
container.style.border = '2px solid red';

console.log(container);

// const black = document.querySel('div');
// black.classList.add('black');
// black.style.backgroundColor = 'black';


container.style.display = 'flex';
container.style.flexWrap = "wrap";
container.style.margin = "5px";

for(x=0;x<272;x++){
    grid = document.createElement('div');
    grid.classList.add('grid'+x);
    grid.style.border = '2px solid black';
    grid.style.width = '28px';
    grid.style.height = '28px';
    container.appendChild(grid);
    grid.addEventListener('mouseover', colorGrid);
}

function colorGrid(e){
    e.target.style.backgroundColor = 'black';
}
document.getElementsByTagName('div')

// container.appendChild(grid);
// console.log(grid);