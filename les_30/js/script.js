/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) DonE

2) Изменить жанр фильма, поменять "комедия" на "драма" DonE

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS V_Done

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promoAdv = document.querySelectorAll('.promo__adv'),
    divPromoGenre = document.querySelectorAll('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    spisok = document.querySelectorAll('.promo__interactive-item');

promoAdv[0].remove();

//2) Изменить жанр фильма, поменять "комедия" на "драма"
divPromoGenre[0].innerHTML = "ДРАМА";

/*3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS*/
promoBg.style.backgroundImage = "url('img/bg.jpg')";

/*4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту */
movieDB.movies.sort();
movieDB.movies.forEach(function (item, i) {
    movieDB.movies[i] = `${i+1} ${item}`;
});


for (let index = 0; index < movieDB.movies.length; index++) {

    spisok[index].innerHTML = `
    <li class="promo__interactive-item">${movieDB.movies[index]}
        <div class="delete"></div>
    </li>
    `;
}