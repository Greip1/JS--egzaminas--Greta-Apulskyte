/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const baseUrl = "https://api.github.com/users";

const cardDivEl = document.querySelector("#output");

const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", getPosts);

// parsisiunciu data
async function getPosts() {
  const resp = await fetch(baseUrl);
  const dataInJs = await resp.json();
  //   console.log("data ===", dataInJs);
  appendCards(dataInJs, cardDivEl);
}

// //korteles  ikeliu
function appendCards(cardsArr, destination) {
  destination.innerHTML = "";
  cardsArr.forEach((cardObj) => {
    destination.append(createCard(cardObj));
  });
}
// // darau korteles
function createCard(cardObj) {
  const divEl = document.createElement("div");
  divEl.className = "card-container";
  divEl.innerHTML = `
  <div class="card">
      <p class="login">${cardObj.login}</p>
   <img class="img" src="${cardObj.avatar_url}" alt="img"></div>
 `;
  return divEl;
}
