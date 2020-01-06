'use strict'

{
    const btn=document.getElementById('btn');
    btn.addEventListener('click',()=>{
        const results=['大吉',
                       '中吉',
                       '凶',
                       '末吉'];
        const n=Math.floor(Math.random()*(results.length)) //0...n
        // min+Math.floor(Math.random()*(max+1-min)) //min...max
        btn.textContent=results[n]
    });
}