const  { chromium } = require('playwright')
const ROOT_URL = 'http://localhost:3001';

describe('playwrite', () => {
    let browser = null
    let page = null

    beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage()

        await page.goto(ROOT_URL);
    })

    afterAll(async () => {
        await browser.close()
        browser = null
    })

    it ('Should load page', async () => {
        expect(page).not.toBeNull()
        expect(await page.title()).not.toBeNull();
    })

    it ('info page for unauthorized user', async () => {
        await page.goto(ROOT_URL)
        expect(await page.innerText('#greeting')).toBe('Привет!')
    })

    it ('phone page for unauthorized user', async () => {
        await page.goto(ROOT_URL)
        await page.click('#phone-link')
        expect(await page.innerText('#unlogin-text')).toBe('You need to authorize')
    })

    it ('log in', async () => {
        await page.goto(ROOT_URL)
        // expect(await page.)
        // await page.fill('#sign-in-form input:nth-child(1)', 'admin')
        await page.click('#sign-in-link')
        const elem = await page.$('#sign-in-form')
        expect(elem).not.toBeNull()
        await page.fill('#login-input', 'admin')
        await page.fill('#password-input', 'admin')
        await page.click('#sign-in-button')

        expect(await page.innerText('#greeting')).toBe('Привет, admin!')
    })

    it ('phone page for authorized user', async () => {
        await page.click('#phone-link')
        const elem = await page.$('#unlogin-text')
        expect(elem).toBeNull()
    })
})