"use strict";

axios.get("https://fizal.me/pokeapi/api/v2/id/257.json")
  .then(response => {
    console.log(response)

    // array for special abilities
    let abilities = response.data.abilities;

    let abilitiesArray = [];
    for (let i = 0; i < abilities.length; i++) {
      abilitiesArray.push(abilities[i].ability.name);
    };

    let blaziken = new Pokemon(
      response.data.name,
      response.data.stats[5].base_stat,
      response.data.stats[4].base_stat,
      response.data.stats[3].base_stat,
      response.data.stats[0].base_stat,
      abilitiesArray
    );

    let stats = document.querySelector(".stats");
    stats.innerHTML =
      `<p> ${blaziken.name} </p>
    <p>HP : ${blaziken.statHP}</p>
    <p>ATK : ${blaziken.statATK}</p>
    <p>DEF : ${blaziken.statDEF}</p>
    <p>SPD : ${blaziken.statSPD}</p>
    <p style="color: gold;">SPECIAL<br> ABILITIES :<br> ${blaziken.statABIL}</p></style>`;
  })


axios.get("https://pokeapi.co/api/v2/move/7")
.then(response => {
  console.log(response)

    let fpunch = new Moveset(
      response.data.name,
      response.data.priority,
      response.data.power,
      response.data.accuracy,
    );

    let moveSet1 = document.querySelector(".moveSet1");
    moveSet1.innerHTML =
  `<p>Name: ${fpunch.moveName} </p>
  <p>Priority : ${fpunch.priority}</p>
  <p>Power : ${fpunch.power}</p>
  <p>Accuracy : ${fpunch.accuracy}</p>`
})

axios.get("https://pokeapi.co/api/v2/move/25")
.then(response => {
  console.log(response)

    let mkick = new Moveset(
      response.data.name,
      response.data.priority,
      response.data.power,
      response.data.accuracy,
    );

    let moveSet2 = document.querySelector(".moveSet2");
    moveSet2.innerHTML =
  `<p>Name: ${mkick.moveName} </p>
  <p>Priority : ${mkick.priority}</p>
  <p>Power : ${mkick.power}</p>
  <p>Accuracy : ${mkick.accuracy}</p>`
})

