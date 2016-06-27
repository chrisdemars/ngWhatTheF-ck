'use strict';

// Event listener for button click.
var btn = document.getElementById('button');

btn.onclick = function () {

  // Declaring an array with ng strings.
  var ngStuff = [
    'ngWhatTheF*ck',
    'ngArgh',
    'ngOhNo',
    'ngIHateYou',
    'ngWorthless',
    'ngIHateCode',
    'ngAngularSucks',
    'ngICantAngular',
    'ngAngularWhat?',
    'ngMad',
    'ngF*ckThis',
    'ngF*ckThat',
    'ngF*ck-ng',
    'ngF*ckAngular',
    'ngIHateJavaScript',
    'ngIHateJS',
    'ngIHateAngular',
    'ngSh*t',
    'ngDamn',
    'ngCantCode',
    'ngDevLifeSucks',
    'ngTheStruggleIsReal'
  ];
  // console.log(ngStuff);
  // Randomizes the array and puts a one of the values in to the generate ID.
  var random = ngStuff[Math.floor(Math.random() * ngStuff.length)];
  document.getElementById('generate').innerHTML = random;
};
