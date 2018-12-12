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
  })