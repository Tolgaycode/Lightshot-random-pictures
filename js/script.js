document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", async function () {
    console.log("Button clicked");
    // Web scraping operations with Puppeteer
    const srcLink = await getSrcLink();

    // Adding the obtained srcLink to the img element in the HTML page
    const imgElement = await document.querySelector(".img");
    console.log(imgElement);
    imgElement.src = srcLink;
    imgElement.style.display = "block";
  });

  async function getSrcLink() {
    const response = await fetch("/scrape"); // Sending a request to the Express.js server
    const data = await response.json();
    return data.srcLink;
  }
});
