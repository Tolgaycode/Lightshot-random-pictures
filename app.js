const puppeteer = require("puppeteer");
const express = require("express");

////// Express
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

////// Puppeteer
const webBot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // URL'yi ve rasgele rakamı birleştirme
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const baseUrl = "https://prnt.sc/";
  const targetUrl = baseUrl + randomNum;
  console.log(targetUrl);

  await page.goto(targetUrl);

  await page.waitForSelector("#screenshot-image");

  const element = await page.$("#screenshot-image");
  const srcLink = await element.evaluate((el) => el.getAttribute("src"));

  await browser.close();

  return srcLink; // srcLink
};

app.get("/scrape", async (req, res) => {
  try {
    const srcLink = await webBot();
    res.json({ srcLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Scraping failed" });
  }
});

app.listen(port, () => {
  console.log(`App working on ${port} port.`);
});
