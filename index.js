let result = document.querySelector('.result')
let level = document.querySelector('.level');
result.innerText = 'hello'

let body = document.querySelector('body');
let first = document.querySelector('#first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');
let forth = document.querySelector('#forth');


let level1 = 1;
level.innerText = `you are at level${level1}`;
let display = true;


let curr='';
let original='';
function check(curr, original){
let flag = true;

for( let i =0 ; i< original.length &&flag&&i<curr.length; i++){
      if(original[i]!=curr[i])flag=false;
}
if(!flag)
result.innerText='Restart Game';
return flag;
}

first.addEventListener('click',function(){
    curr += 'f';
    check(curr, original);
    console.log(curr);
});

second.addEventListener('click', function(){
    curr +='s';
    check(curr, original);
    console.log(curr);
})

third.addEventListener('click', function(){
    curr +='t';
    check(curr, original);
    console.log(curr);
})

forth.addEventListener('click', function(){
    curr +='f';
    check(curr, original);
    console.log(curr);
})

let box = document.querySelector('.box1');

box.addEventListener('keydown', function(event){
       if(event.key==='Enter'){
        level1= level1+1;
        level.innerText = `you are at level${level1}`;
       }   
       console.log('enter press');
})






