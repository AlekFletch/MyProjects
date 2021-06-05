const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation(){
   const elem = document.querySelector('.box');
   let pos =300,
    moving = false,
    finisher = false;
   const id = setInterval(frame,10);
    
   function frame(){
      if (pos == 0) {
         moving = true;
         finisher = true;
      } else if (pos == 300) {
         if (finisher) {
           clearInterval(id); 
         }
         moving = false;
      }
      if (moving) {
         pos++;
         elem.style.top = pos + "px";
         elem.style.left = pos + "px";
      } else {
         pos--;
         elem.style.top = pos + "px";
         elem.style.left = pos + "px";
      }
   }
}

console.log('Hello');
btn.addEventListener("click", myAnimation);


