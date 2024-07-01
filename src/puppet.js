

const puppeteer =  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://dj-jestelle.vercel.app/");

    await page.screenshot({ path: "jestelleweb.png" });
    await browser.close();
})();
