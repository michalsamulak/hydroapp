import '../scss/main.scss';

// uncomment the lines below to enable PWA
 import {registerSW} from './pwa.js';
 registerSW();

/* place your code below */


const counter = document.querySelector('.glass__count--js');
const add = document.querySelector('.btn__add--js');
const remove = document.querySelector('.btn__remove--js');
const key = new Date().toISOString().slice(0, 10);

let countGlass = 0;

const lsGlass = localStorage.getItem(key);

if (lsGlass) {
    countGlass = lsGlass;
    
} else {
    localStorage.setItem(key, 0);
}

console.log(countGlass);
counter.innerHTML = countGlass;


add.addEventListener('click', () => {
    countGlass ++;
    counter.innerHTML = countGlass;

    localStorage.setItem(key, countGlass);
})

remove.addEventListener('click', () => {
    if(countGlass > 0) {
        countGlass --;
        counter.innerHTML = countGlass;
        if(localStorage.key) {
            localStorage.setItem(key, countGlass);
        } else {
            console.log('hey'); 
        }
        
    }
})

