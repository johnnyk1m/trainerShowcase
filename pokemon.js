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

