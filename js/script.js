// https://prnt.sc/876157

document.getElementById("btn").addEventListener("click", async function () {
  console.log("Button clicked");
  // Puppeteer ile web scraping işlemleri
  const srcLink = await getSrcLink();

  // Elde edilen srcLink'i HTML sayfasındaki img elementine eklemek
  const imgElement = document.querySelector(".img");
  imgElement.src = srcLink;

  // Diğer işlemler (örneğin, kaynak bağlantısını görüntüleme)
  const generatedLink = document.getElementById("generatedLink");
  generatedLink.textContent = "Generated Link: " + srcLink;
  const imgSrcResult = document.getElementById("imgSrcResult");
  imgSrcResult.textContent = "Image Source: " + srcLink;
});

async function getSrcLink() {
  const response = await fetch("/scrape"); // Express.js sunucusuna istek gönderme
  const data = await response.json();
  return data.srcLink;
}
