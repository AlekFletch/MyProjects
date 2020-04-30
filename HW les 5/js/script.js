function addElement() {
   let menuSite = document.querySelectorAll('li'),
      title = document.getElementById('title'),
      menu = document.querySelector('.menu'), 
      adv = document.querySelector('.adv'),
      columnies = document.querySelectorAll('.column'),
      promptBlock = document.querySelector('.prompt');

   //Создаем новый пункт меню
   var menuItem = document.createElement('li');
   menuItem.className = 'menu-item';
   menuItem.textContent = 'Пятый пункт';

   //Вставляем в ul
   menu.appendChild(menuItem);

   //Переставляем второй и третий пункт меню
   menu.insertBefore(menuSite[2], menuSite[1]);
   // menu.removeChild(menuSite[2]);

   //Меняем заголовок
   title.textContent = "Мы продаем только подлинную технику Apple";

   //Удаляем рекламу
   columnies[1].removeChild(adv);

   //Меняем фоновую картинку
   // document.body.style.background = 'url(../img/apple_true.jpg)';

   // Спрашиваем у пользователя про отношение к apple
   var userAnswer = prompt('Как вы относитесь к технике?');
   promptBlock.textContent = userAnswer;

}
addElement();