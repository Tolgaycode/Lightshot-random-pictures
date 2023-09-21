// https://prnt.sc/876157


document.getElementById("btn").addEventListener("click", function () {
  const randomNum = Math.floor(100000 + Math.random() * 900000);

  // URL'yi ve rasgele rakamı birleştirme
  const baseUrl = "https://prnt.sc/";
  const finalUrl = baseUrl + randomNum;

  console.log(finalUrl);


  import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  // other actions...
  await browser.close();
})();


////////// Puppeteer //////////
// const puppeteer = require("puppeteer");

// try {
//   (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://learnwebcode.github.io/practice-requests/");

//     const imgsrc = await page.evaluate(() => {
//       return Array.from(document.querySelectorAll("img")).map(
//         (img) => img.src
//       );
//     });

//     console.log(imgsrc);

//     await browser.close();
//   })();
// } catch (err) {
//   console.error(err);
// }
