'use strict';


const inputRub = document.querySelector('#rub'),
inputUsd = document.querySelector('#usd');

let usdCurrency = true;

function findUsd(usdFilter) {
    
   const req = new XMLHttpRequest();
   req.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
   req.send();
   req.addEventListener('load', ()=>{
   if (req.status === 200) {
       try {
        const courses = JSON.parse(req.response);
        const usdRate = courses.Valute.USD.Value;
        if (!usdFilter){
        inputUsd.value = (inputRub.value/usdRate).toFixed(2);
        } else {
            inputRub.value = (inputUsd.value*usdRate).toFixed(2);
        }
       } catch(err){
        (!usdFilter)? inputUsd.value = 'Ошибка': inputUsd.value = 'Ошибка';
       } 
   } else {
    (!usdFilter)? inputUsd.value = 'Server Error': inputUsd.value = 'Server Error';
   }
   });
}
inputRub.addEventListener('input', () => {
   findUsd(false);
});

inputUsd.addEventListener('input', () => {
    findUsd(true);
 });