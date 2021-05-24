window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader_item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsparent = document.querySelector('.tabheader_items');

    function hideTabContent() {
       tabsContent.forEach (item => {
          item.getElementsByClassName.display = 'none';
       });

       tabs.forEach (tab => {
     tab.classList.remove('tabheader__item_active');
       });
    }  
      
});