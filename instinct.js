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