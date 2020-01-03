'use strict';
{
    const words=[
        'apple',
        'sky',
        'blue',
        'middle',
        'set',
    ];
    let word;
    let loc;
    let score;
    let miss;
    const timeLimit=3*1000;


    const target=document.getElementById('target');
    const scoreLable=document.getElementById('score');
    const missLable=document.getElementById('miss');
    const timerLable=document.getElementById('timer');
    let startTime;
    let isPlaying=false;

    function updateTarget(){
        let placeholder='';
        for(let i=0;i<loc;i++){
            placeholder+='_';
        }
        target.textContent=placeholder+word.substring(loc);

    }

    function updateTimer(){
        const timeLeft=startTime+timeLimit-Date.now();
        timerLable.textContent=(timeLeft/1000).toFixed(2);

        const timeoutId=setTimeout(() => {
            updateTimer();
        }, 10);

        if (timeLeft<0){
            isPlaying=false;

            clearTimeout(timeoutId);
            timerLable.textContent='0:00'
            setTimeout(() => {
                showResult();
            }, 100);
            
            target.textContent='click to replay';

        }
    }

    function showResult(){
        const accracy=score+miss==0?0:score/(score+miss)*100;
        alert(`${score} letters, ${miss} misses, ${accracy.toFixed(2)}% accracy!`)
    }   

    window.addEventListener('click',()=>{
        if (isPlaying===true){
            return;
        }
        isPlaying=true;

        loc=0;
        score=0;
        miss=0;
        scoreLable.textContent=score;
        missLable.textContent=miss;
        word=words[Math.floor(Math.random()*words.length)];

        startTime=Date.now();
        target.textContent=word;
        updateTimer();
    });

    
    window.addEventListener('keydown',e=>{
        if (isPlaying!==true){
            return;
        }
        if (e.key===word[loc]){
            loc++;
            if(loc===word.length){
                word=words[Math.floor(Math.random()*words.length)];
                loc=0;
            }
            updateTarget();
            score++;
            scoreLable.textContent=score;
        }else{
            miss++;
            missLable.textContent=miss;
        }
    });   



}