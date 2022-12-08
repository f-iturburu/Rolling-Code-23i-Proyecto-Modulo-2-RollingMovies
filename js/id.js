export function id() {
  let arrayAlfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  id =
    dd +
    "/" +
    mm +
    "/" +
    yyyy +
    "#" +
    arrayAlfabeto[Math.trunc(Math.random() * 26)] +
    arrayAlfabeto[Math.trunc(Math.random() * 26)] +
    "-" +
    Math.trunc(Math.random() * (1000 - 10000) + 10000);

  return id;
}

console.log(id());
