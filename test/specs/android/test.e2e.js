const { expect, driver, $ } = require('@wdio/globals');

describe('Sample Test', () => {
    it('Sample Test check', async () => {
        await driver.pause(15000)
    })
})

