"use strict";

axios.get("https://fizal.me/pokeapi/api/v2/id/148.json")
  .then(response => {
    console.log(response)

    // array for special abilities
    let abilities = response.data.abilities;

    let abilitiesArray = [];
    for (let i = 0; i < abilities.length; i++) {
      abilitiesArray.push(abilities[i].ability.name);
    };

    let dragonair = new Pokemon(
      response.data.name,
      response.data.stats[5].base_stat,
      response.data.stats[4].base_stat,
      response.data.stats[3].base_stat,
      response.data.stats[0].base_stat,
      abilitiesArray
    );

    let stats = document.querySelector(".stats");
    stats.innerHTML =
      `<p> ${dragonair.name} </p>
    <p>HP : ${dragonair.statHP}</p>
    <p>ATK : ${dragonair.statATK}</p>
    <p>DEF : ${dragonair.statDEF}</p>
    <p>SPD : ${dragonair.statSPD}</p>
    <p style="color: blue;">SPECIAL<br> ABILITIES :<br> ${dragonair.statABIL}</p></style>`;
  });


// axios.get("https://pokeapi.co/api/v2/move/35")
//   .then(response => {
//     // console.log(response)

//     let wrap = new Moveset(
//       response.data.name,
//       response.data.priority,
//       response.data.power,
//       response.data.accuracy,
//     );
//    console.log(wrap)
//     let moveSet1 = document.querySelector(".moveSet1");
//     moveSet1.innerHTML =
//       `<p>Name: ${wrap.moveName} </p>
//   <p>Priority : ${wrap.priority}</p>
//   <p>Power : ${wrap.power}</p>
//   <p>Accuracy : ${wrap.accuracy}</p>`
//   });

// axios.get("https://pokeapi.co/api/v2/move/349")
//   .then(response => {
//     console.log(response)

//     let ddance = new Moveset(
//       response.data.name,
//       response.data.priority,
//       response.data.power,
//       response.data.accuracy,
//     );

//     let moveSet2 = document.querySelector(".moveSet2");
//     moveSet2.innerHTML =
//       `<p>Name: ${ddance.moveName} </p>
//   <p>Priority : ${ddance.priority}</p>
//   <p>Power : ${ddance.power}</p>
//   <p>Accuracy : ${ddance.accuracy}</p>`
//   });

  