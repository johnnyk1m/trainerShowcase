"use strict";

// axios.get("https://api.github.com/users/johnnyk1m?access_token=46ffe20aabe222fb41ddb5d87ecf55ab207f7e75")
// .then(response => {
//   const data=response.data;
//   let gitHub = document.querySelector(".gitHub");
//   gitHub.src = data.avatar_url;
//   document.body.appendChild(gitHub);

  axios.get("https://fizal.me/pokeapi/api/v2/id/257.json")
	.then(response => {
    console.log(response)
    let statHP = document.querySelector(".statHP");
    statHP.innerHTML = response.data.stats[5].base_stat; 
    console.log(statHP)
    // document.body.appendChild(statHp);
});

// class pokeMaster {
//   constructor(statHP, statATK, statDEF, statSPD, statABIL) {
//   this.statHP = statHP;
//   this.statATK = statATK;
//   this.statDEF = statDEF;
//   this.statSPD = statSPD;
//   this.statABIL = this.statABIL;
//   }
// }

// class pokemon extends pokeMaster {
//   constructor(statHP, statATK, statDEF, statSPD, statABIL) {
//     super(statHP, statATK, statDEF, statSPD, statABIL);
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