'use strict';


console.log('ハロワ!');
let num=10
for(let i=0;i<num;i++){
    const div=document.createElement('div');
    div.classList.add('box');
    
    div.addEventListener('click',()=>{
        div.classList.toggle('circle');
        div.textContent=i+1
    })

    document.body.appendChild(div);
}
console.log()