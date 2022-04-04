/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const divEl = document.getElementById("output");
const inputEl = document.getElementById("search");
const submEl = document.getElementById("submit-btn");

submEl.addEventListener("click", convertWeight);
function convertWeight(ev) {
  ev.preventDefault();
  const inputKg = inputEl.value;
  divEl.style.padding = "10px 20px";
  divEl.style.textAlign = "center";

  const svarais = inputKg * 2.2046;
  const gramais = inputKg / 0.001;
  const uncijos = inputKg * 35.274;
  divEl.innerHTML = `
    ${svarais} lb;<br>
    ${gramais} g;<br>
    ${uncijos} oz<br>
    `;
}
