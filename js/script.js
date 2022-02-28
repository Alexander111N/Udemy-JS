// "use strict";

// alert('Hello Mr.Alexander!');

// let ans = confirm('Whould you like to continue?');
// console.log(ans);

// let check = 'Interpolation test';

// let answer = prompt('How long are you going to learn JS ?',`${check}`);
// console.log(answer);

// console.log(`Проверка интерполяции/ ${check}`);

// console.log(typeof(answer)); 
let abcd;
console.log(abcd);

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let lastFilm1 = prompt('Один из последних просмотренных фильмов?');
// let lastFilmScore1 = prompt('На сколько оцениваете его?', 'От 1 до 10-ти');
// let lastFilm2 = prompt('Один из последних просмотренных фильмов?');
// let lastFilmScore2 = prompt('На сколько оцениваете его?', 'От 1 до 10-ти');

let count = 0;

while(count < 2) {
    let lastFilm = prompt('Один из последних просмотренных фильмов?');

    if(lastFilm == '' || lastFilm == null || lastFilm.length > 50 ){
        continue;
    }  

    let lastFilmScore = prompt('На сколько оцениваете его?', 'От 1 до 10-ти');

    if(lastFilmScore == '' || lastFilmScore == null || lastFilmScore.length > 50 ){
        continue;
    }  

    personalMovieDB.movies[lastFilm] = lastFilmScore;
    count++;
}

if(personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <=30){
    alert('Вы классический зритель');
} else if(personalMovieDB.count > 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}
// personalMovieDB.movies[lastFilm1] = lastFilmScore1;
// personalMovieDB.movies[lastFilm2] = lastFilmScore2;

console.log(personalMovieDB);

