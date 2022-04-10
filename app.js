"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

      
const movie = prompt('Один из последних просмотренных фильмов?', ''),
	  grade = prompt('На сколько оцените его?', ''), 
	  movie2 = prompt('Один из последних просмотренных фильмов?', ''),
	  grade2 = prompt('На сколько оцените его?', '');
	  
	
	  
personalMovieDB.movies[movie] = grade;
personalMovieDB.movies[movie2] = grade2;

console.log(personalMovieDB);
