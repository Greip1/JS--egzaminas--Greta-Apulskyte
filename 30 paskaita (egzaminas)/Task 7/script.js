/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(ob) {
  const keysArr = [];
  for (let key in ob) {
    keysArr.push(key);
  }
  return keysArr;
}

// const ats = showObjectKeys(audi);
// console.log("cia ats ===", ats);
