axios.get("https://pokeapi.co/api/v2/move/35")
  .then(response => {
    // console.log(response)

    let wrap = new Moveset(
      response.data.name,
      response.data.priority,
      response.data.power,
      response.data.accuracy,
    );
   console.log(wrap)
    let moveSet1 = document.querySelector(".moveSet1");
    moveSet1.innerHTML =
      `<p>Name: ${wrap.moveName} </p>
  <p>Priority : ${wrap.priority}</p>
  <p>Power : ${wrap.power}</p>
  <p>Accuracy : ${wrap.accuracy}</p>`
  });

axios.get("https://pokeapi.co/api/v2/move/349")
  .then(response => {
    console.log(response)

    let ddance = new Moveset(
      response.data.name,
      response.data.priority,
      response.data.power,
      response.data.accuracy,
    );

    let moveSet2 = document.querySelector(".moveSet2");
    moveSet2.innerHTML =
      `<p>Name: ${ddance.moveName} </p>
  <p>Priority : ${ddance.priority}</p>
  <p>Power : ${ddance.power}</p>
  <p>Accuracy : ${ddance.accuracy}</p>`
  });