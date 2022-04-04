/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const divEl = document.getElementById("output");
const baseUrl = "cars.json";

async function getData() {
  const resp = await fetch(baseUrl);
  const dataInJs = await resp.json();
  console.log(`exp dataInJs===`, dataInJs);
  const brand = dataInJs.map((ob) => ob.brand);
  console.log(brand);
  const model = dataInJs.map((ob) => ob.models);
  console.log(model);

  createExpPost(dataInJs, divEl);
}
getData();

function createExpPost(dataArr, destination) {
  destination.innerHTML = "";
  dataArr.forEach((ob) => {
    // console.log(`cia yra ob==`, ob);
    destination.append(createExpBlock(ob));
  });
}

function createExpBlock(ob) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "brand-container");
  newDiv.innerHTML = `
  
            <h3 class="brand">${ob.brand}</h3>

            <p class="model"> ${ob.models} </p>
          

  `;
  console.log(`cia div el`, newDiv);
  return newDiv;
}
