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