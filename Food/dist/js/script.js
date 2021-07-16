window.addEventListener('DOMContentLoaded', function () {

   const tabs = require('./modules/tabs'),
      calc = require('./modules/calc'),
      cards = require('./modules/cards'),
      forms = require('./modules/forms'),
      modal = require('./modules/modal'),
      slider = require('./modules/slider'),
      timer = require('./modules/timer');

   calc();
   cards();
   forms();
   modal();
   slider();
   tabs();
   timer();

});