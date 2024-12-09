window.onload = () => {
    document.querySelector('#calculate').onclick=calculate;
    document.querySelector('#reset').onclick=reset;
    document.querySelector('#stop').onclick=stop;

}
function calculate (){
    const date=document.querySelector('#date').value;
    const time=document.querySelector('#time').value;


    const stop=document.querySelector('#stop');

    const endTime=new Date(date + " " + time);

   const interval = setInterval(() => calculateTime(endTime),1000);

   stop.addEventListener('click', () =>{
    clearInterval(interval);    
   })
}


function calculateTime(endTime){
    const currentTime = new Date();
   
    const days= document.querySelector('#days');
    const hours= document.querySelector('#hours');
    const minutes= document.querySelector('#minutes');
    const seconds= document.querySelector('#seconds');





    if(endTime > currentTime){
        const timeleft=(endTime-currentTime)/1000;
        
        console.log(timeleft);
        days.innerText=Math.floor(timeleft/(24*60*60));
        hours.innerText=Math.floor((timeleft / (60*60))%24);
        minutes.innerText=Math.floor((timeleft / 60) %60);
        seconds.innerText=Math.floor(timeleft % 60);

    }
    else{
        days.innerText=0
        hours.innerText=0;
        minutes.innerText=0;
        seconds.innerText=0;


    }
}

function reset(){
    const days= document.querySelector('#days').innerText = 0;
    const hours= document.querySelector('#hours').innerText = 0;
    const minutes= document.querySelector('#minutes').innerText = 0;
    const seconds= document.querySelector('#seconds').innerText = 0;



}