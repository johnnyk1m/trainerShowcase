"use strict";
class Pokemon {
  constructor(name, statHP, statATK, statDEF, statSPD, statABIL) {
    this.name = name;
    this.statHP = statHP;
    this.statATK = statATK;
    this.statDEF = statDEF;
    this.statSPD = statSPD;
    this.statABIL = statABIL;
  }
};

class Moveset {
  constructor(moveName, priority, power, accuracy) {
    this.moveName = moveName;
    this.priority = priority;
    this.power = power;
    this.accuracy = accuracy;
  }
};

// challenge masterball toggle
let mball=document.querySelector(".mball");
let moveset1=document.querySelector(".moveSet1");
let moveset2=document.querySelector(".moveSet2");

mball.addEventListener('click',(event) => { 

moveset1.classList.toggle("mballToggle");
moveset2.classList.toggle("mballToggle");
});
