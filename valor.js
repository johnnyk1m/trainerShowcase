"use strict";

axios.get("https://fizal.me/pokeapi/api/v2/id/325.json")
  .then(response => {
    console.log(response)

    // array for special abilities
    let abilities = response.data.abilities;

    let abilitiesArray = [];
    for (let i = 0; i < abilities.length; i++) {
      abilitiesArray.push(abilities[i].ability.name);
    };

    let spoink = new Pokemon(
      response.data.name,
      response.data.stats[5].base_stat,
      response.data.stats[4].base_stat,
      response.data.stats[3].base_stat,
      response.data.stats[0].base_stat,
      abilitiesArray
    );

    let stats = document.querySelector(".stats");
    stats.innerHTML =
      `<p> ${spoink.name} </p>
    <p>HP : ${spoink.statHP}</p>
    <p>ATK : ${spoink.statATK}</p>
    <p>DEF : ${spoink.statDEF}</p>
    <p>SPD : ${spoink.statSPD}</p>
    <p style="color: red;">SPECIAL<br> ABILITIES :<br> ${spoink.statABIL}</p></style>`;
  })

axios.get("https://pokeapi.co/api/v2/move/129")
  .then(response => {
    console.log(response)

      let swift = new Moveset(
        response.data.name,
        response.data.priority,
        response.data.power,
        response.data.accuracy,
      );

      let moveSet1 = document.querySelector(".moveSet1");
      moveSet1.innerHTML =
    `<p>Name: ${swift.moveName} </p>
    <p>Priority : ${swift.priority}</p>
    <p>Power : ${swift.power}</p>
    <p>Accuracy : ${swift.accuracy}</p>`
  })

  axios.get("https://pokeapi.co/api/v2/move/94")
  .then(response => {
    console.log(response)

      let psychic = new Moveset(
        response.data.name,
        response.data.priority,
        response.data.power,
        response.data.accuracy,
      );

      let moveSet2 = document.querySelector(".moveSet2");
      moveSet2.innerHTML =
    `<p>Name: ${psychic.moveName} </p>
    <p>Priority : ${psychic.priority}</p>
    <p>Power : ${psychic.power}</p>
    <p>Accuracy : ${psychic.accuracy}</p>`
  })