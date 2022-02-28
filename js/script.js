"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <=30){
        alert('Вы классический зритель');
    } else if(personalMovieDB.count > 30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
}

writeYourGenres();


