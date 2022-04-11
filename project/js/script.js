/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

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

//1
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => 
    item.remove()
    );

//2
const genre = document.getElementsByClassName('promo__genre');
 genre[0].textContent = 'ДРАМА';

//3
 const backView = document.querySelector('.promo__bg');
 backView.style.backgroundImage = 'url(\'img/bg.jpg\')';

 //4,5
 function createListOfMovies (){
    movieDB.movies.sort();
    const movieList = document.querySelector('.promo__interactive-list');       
    movieList.innerHTML = '';
    movieDB.movies.forEach((item, i) => {
        movieList.innerHTML +=`
        <li class="promo__interactive-item">${i+1} ${item}
        <div class="delete"></div>
        </li>
        `;   
    });
    addEvListForDeleteElements();  // навешиваем обработчики события на все кнопки delete
 }
createListOfMovies(); // вызываем метод при первоначальной загрузке страницы

const btnAddFilm = document.querySelector('button');  // получаем кнопку
const favoriteFilm = document.querySelector('[type = checkbox]'); // получаем галочку
let formTextField = document.querySelector('.adding__input');

btnAddFilm.addEventListener('click', (event) => {                               // обработчик события на кнопку Добавить
    event.preventDefault(); // убираем перезагрузку страницы
    let nameOfFilm = formTextField.value.toUpperCase();
    if(nameOfFilm){ // проверяем чтобы фильм не был пустой строкой
        if(nameOfFilm.length > 21){
            nameOfFilm = nameOfFilm.slice(0,21) + '...';
        }
        movieDB.movies.push(nameOfFilm);
        if(favoriteFilm.checked){
            alert('Добавляем любимый фильм');
            console.log('Добавляем любимый фильм');
        }
        createListOfMovies(); // вызываем список с обновлнным списком
    }
    formTextField.value = '';
});

function addEvListForDeleteElements (){                         // обработчик события на кнопки Удалить
    const btnDeleteFilm = document.querySelectorAll('.promo__interactive-list .delete');
    btnDeleteFilm.forEach(item => {
        item.addEventListener('click', (event) => {
            var name = event.target.parentElement.innerText.slice(2, event.target.parentElement.innerText.length);
            deleteFilmFromDB(name);
            createListOfMovies();
        });
    });
}

function deleteFilmFromDB (name){    // Удаляем фильм из БД
    movieDB.movies.forEach((item,i) => {
        if(item.toUpperCase() == name.toUpperCase()){
            movieDB.movies.splice(i, 1);
        }
    });
}





