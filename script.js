const close = document.getElementById('close');
const open =document.getElementById('open');
const menu = document.getElementById('menu');

open.addEventListener('click',toggleFunction);
close.addEventListener('click', toggleFunction);

function toggleFunction(){
    menu.classList.toggle('active')
}

//DATA STRUCTURES AND ALGORITHMS
//STACKS

let numbers = [20,30,21,51];
numbers.push(1000)
console.log(numbers)

let maxHeap = [25,16,24,5,11,19,1,2,3,5]
let index = 4;
//lets find its 
let parent = 4/2+1;
console.log(maxHeap[parent])
