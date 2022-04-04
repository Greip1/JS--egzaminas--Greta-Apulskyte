/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clickMeEl = document.getElementById("btn__element");
const clickNumber = document.getElementById("btn__state");

clickMeEl.addEventListener("click", countClicks);

let num = 1;

function countClicks(ev) {
  ev.preventDefault();
  clickNumber.innerHTML = num++;
}
