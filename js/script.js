// "use strict";

// alert('Hello Mr.Alexander!');

// let ans = confirm('Whould you like to continue?');
// console.log(ans);

// let check = 'Interpolation test';

// let answer = prompt('How long are you going to learn JS ?',`${check}`);
// console.log(answer);

// console.log(`Проверка интерполяции/ ${check}`);

// console.log(typeof(answer)); 

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);
console.log(personalMovieDB.actors);
console.log(personalMovieDB.genres);
console.log(personalMovieDB.privat);


let lastFilm1 = prompt('Один из последних просмотренных фильмов?');
let lastFilmScore1 = prompt('На сколько оцениваете его?', 'От 1 до 10-ти');

let lastFilm2 = prompt('Один из последних просмотренных фильмов?');
let lastFilmScore2 = prompt('На сколько оцениваете его?', 'От 1 до 10-ти');



personalMovieDB.movies[lastFilm1] = lastFilmScore1;
personalMovieDB.movies[lastFilm2] = lastFilmScore2;

console.log(personalMovieDB);