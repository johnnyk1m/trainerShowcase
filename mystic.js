"use strict";


  axios.get("https://fizal.me/pokeapi/api/v2/id/148.json")
	.then(response => {
    console.log(response)
    let statHP = document.querySelector(".statHP");
    let statATK = document.querySelector(".statATK");
    let statDEF = document.querySelector(".statDEF");
    let statSPD = document.querySelector(".statSPD");
    let statABIL = document.querySelector(".statABIL");

    statHP.innerHTML = response.data.stats[5].base_stat;
    statATK.innerHTML = response.data.stats[4].base_stat; 
    statDEF.innerHTML = response.data.stats[3].base_stat; 
    statSPD.innerHTML = response.data.stats[0].base_stat; 
    statABIL.innerHTML = response.data.abilities[0].ability.name;
    console.log(statHP)
});



// let blaziken = {
//   HP: statHP,
//   ATK: statATK,
//   DEF: statDEF,
//   SPD: statSPD,
//   ABIL: statABIL
// }


// class pokeMaster {
//   constructor(HP, ATK, DEF, SPD, ABIL) {
//   this.HP = statHP;
//   this.ATK = statATK;
//   this.DEF = statDEF;
//   this.SPD = statSPD;
//   this.ABIL = statABIL;
//   }
// }


// function get(name); {
//   let 
//   document.querySelector('')
// let i=o;
// for(let i=0; i < name.length; ++i)
// }
// function all();
// let i=o;
// for(let i=0; i < all.length; ++i)