// https://prnt.sc/876157

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Sunucunun dinleyeceği port

app.set("view engine", "ejs"); // Örnek olarak EJS kullanıldı, isteğe bağlı olarak başka bir template engine kullanabilirsiniz

app.get("/", function (req, res) {
  const puppeteer = require("puppeteer");

  async function runPuppeteer() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://learnwebcode.github.io/practice-requests/");

    const imgsrc = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("img")).map((img) => img.src);
    });

    await browser.close();

    return imgsrc;
  }

  const imagerender = runPuppeteer();
  console.log(imagerender);
  res.render("index", {
    images: imagerender,
  });
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
