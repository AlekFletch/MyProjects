window.addEventListener('DOMContentLoaded', () => {
  //tabs
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(tab => {
      tab.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {

    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
	});

  //timers
  const deadline = '2021-06-04';

  //Создаем функцию для определения разницы между дедлайном и текущим временем
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t/(1000*60*60*24));
         // hours = Math.floo 
  }

});