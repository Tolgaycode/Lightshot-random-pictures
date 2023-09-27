// https://prnt.sc/876157


document.getElementById("btn").addEventListener("click", function () {
  const randomNum = Math.floor(100000 + Math.random() * 900000);

  // URL'yi ve rasgele rakamı birleştirme
  const baseUrl = "https://prnt.sc/";
  const finalUrl = baseUrl + randomNum;

  console.log(finalUrl);

