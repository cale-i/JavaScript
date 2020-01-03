'use strict';

{
    console.log('ハロワ!');
    let num=10
    for(let i=0;i<num;i++){
        const div=document.createElement('div');
        div.classList.add('box');
        
        div.addEventListener('click',()=>{
            div.classList.toggle('circle');
            div.textContent=i+11
        })

        document.body.appendChild(div);
    }
    let arr=[10,20,30];

    arr.forEach(e=>{
        console.log(`${e}`)
    })

    arr.map(e=>console.log(e*1.1));
    const arr2=arr.map(e=>e*1.1);
    const odds=arr2.filter(e=>e%2);
    console.log(odds);
    const dict={x:100,y:200,}
    console.log(dict.x);
    console.log(dict['y']);
    dict.z=300;
    dict['zz']=400;
    console.log(dict.z);
    console.log(dict['zz']);
    console.log(Object.keys(dict));
    console.log(Object.values(dict));
    console.log(8/2*(2+2))
    // alert('message')
    // const answer = confirm('can i remove')
    // if (answer){
    //     console.log('removed')
    // }else{
    //     console.log('canceled')
    // }

    const text=document.querySelector('input[type="text"]');
    const textarea=document.querySelector('textarea');
    
    // text.focus();
    text.select();
    // text.disabled=true;


    // let i=0
    // function showTime(){
    //     console.log(new Date());
    //     i++;
    //     if (i>2){
    //         clearInterval(intervalId);
    //     }
    // };
    // const intervalId = setInterval(showTime,1000);

    // setTimeout(showTime,10000);
}