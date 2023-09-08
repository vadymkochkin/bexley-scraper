import puppeteer from 'puppeteer';

let main = async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: {
                width: 1280,
                height: 1080,
            }
        });
        const page = await browser.newPage();
    } catch (err) {

    }
}

main();