/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function sum(sk1, sk2) {
    return sk1 + sk2;
  };

  this.subtraction = function subtraction(sk1, sk2) {
    return sk1 - sk2;
  };

  this.multiplication = function multiplication(sk1, sk2) {
    return sk1 * sk2;
  };
  this.division = function division(sk1, sk2) {
    return sk1 / sk2;
  };
}

// const calc = new Calculator();
// const ats = calc.division(2, 4);
// console.log("ats ===",ats);
