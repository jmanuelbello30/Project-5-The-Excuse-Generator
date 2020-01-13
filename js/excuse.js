'use strict'

function excuseGenerator(){
  let who = ['My wife','My Father','My Brother','My Mother'];
  let what = ['lost my wallet','lost my Homework','lost my Keys','lost my Identification Card'];
  let when = ['in the Morning','when it came to here','when I was ready','during my dinner','while I was praying'];

  let ramdomWho =  randomNumber(who);
  let randomWhat =  randomNumber(what);
  let randomWhen =  randomNumber(when);

  let excuse = who[ramdomWho] + " " + what[randomWhat] +" "+ when[randomWhen];

  document.getElementById('excuse').innerHTML = excuse;
}

function randomNumber(array){
  return Math.floor((Math.random() * (array.length))); 
}
