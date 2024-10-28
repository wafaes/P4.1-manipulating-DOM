/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

fetch("heroes.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => renderJSON(jsondata))
  .catch((e) => {
    console.log(e);
  });

function renderJSON(jsondata) {
  const template = document.getElementById("template").content;
  const container = document.querySelector(".row");
  const heroes = jsondata.data.results;



 heroes.forEach(heroe => {
  const newCard = template.cloneNode(true);
  console.log(heroe);

  newCard.querySelector("h5").textContent = heroe.name;
  newCard.querySelector("p").textContent = heroe.description;
  newCard.querySelector("img").src=heroe.thumbnail.path + "." + heroe.thumbnail.extension;
  //newCard.querySelector()

  container.appendChild(newCard);
 });
}
