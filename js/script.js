"use strict";


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {

        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count <=30){
            alert('Вы классический зритель');
        } else if(personalMovieDB.count > 30){
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++){
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
            if(personalMovieDB.genres[i-1] == null || personalMovieDB.genres[i-1] == ''){
                alert('Нельзя оставлять пустую строку или нажимать Отмена. Повторите попытку еще раз.');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i, arr) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        }
        else if(personalMovieDB.privat == true){
            personalMovieDB.privat = false;
        }
        else{
            alert('personalMovieDB.privat - Неведома зверушка');
        }    
    }


};


// Object.assign(personalMovieDB,{start,rememberMyFilms,detectPersonalLevel,showMyDB,writeYourGenres,toggleVisibleMyDB});
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.start();
console.log(personalMovieDB);



