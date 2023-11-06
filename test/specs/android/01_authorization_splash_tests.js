
import Authorization from "../../screenobjects/android/authorization";
import { expect as expectChai } from 'chai';


beforeEach(function () {
    // Add a wait using a promise
    return new Promise((resolve) => {
      setTimeout(resolve, 7000); // Wait for 7 seconds
    }); 
  });

describe("01 Authorization Splash Activity Tests", () => {
  

  it("Test Authorization buttons", async () => {
    driver.pause(5000);
    
    const isSkipButtonPresent = await Authorization.isElementPresent(Authorization.skipAuthPageOwnCount);
    const isNextButtonPresent = await Authorization.isElementPresent(Authorization.authFirstScreensNextBtn);

    // Making separate assertions for each conditions
    
    expect(isSkipButtonPresent).toBe(true,"Перевірка наявності кнопки пропустити");
    expect(isNextButtonPresent).toBe(false, "Перевірка наявності кнопки далі");
  });

  it("Test Authorization field 1", async () => {
    driver.pause(5000);
    const actualText = await Authorization.authTopText.getText();
    
    // Making separate assertions for each conditions
    expectChai(actualText).to.equal("Картка Фора club");
    
  });

  it("Test Authorization field 2", async () => {
    driver.pause(5000);
    const authContentText = await Authorization.authContentText.getText();
  
    // Making separate assertions for each conditions
    expectChai(authContentText).to.equal("Електронна картка завжди під рукою. Прощавайте, зайвий пластик та папір!");
    
  });

});


describe("02 Authorization Splash Activity Tests2", () => {

  
  it("Test Authorization button Page 2", async () => {
    driver.pause(5000);
    await Authorization.scrollElementIntoViewToLeftWithNoElements(1);

    const isSkipButtonPresent = await Authorization.isElementPresent(Authorization.skipAuthPageOwnCount);
    const isNextButtonPresent = await Authorization.isElementPresent(Authorization.authFirstScreensNextBtn);

    // Making separate assertions for each conditions
    expect(isSkipButtonPresent).toBe(true,"Перевірка наявності кнопки пропустити");
    expect(isNextButtonPresent).toBe(false, "Перевірка наявності кнопки далі");

  });

  it("Test Authorization field 1 Page 2", async () => {
    driver.pause(5000);
    const actualText = await Authorization.authTopText.getText();
    
    expectChai(actualText).to.equal("Кешбек бонуси та персональні пропозиції");
    
  });

  it("Test Authorization field 2 Page 2", async () => {
    driver.pause(5000);
    const authContentText = await Authorization.authContentText.getText();
    
    expectChai(authContentText).to.equal("Усі бали, кешбек бонуси та персональні пропозиції відтепер у додатку.");
    
  });


});


describe("Authorization Splash Activity Tests3", () => {
it("Test Authorization button Page 3", async () => {
    driver.pause(5000);
    await Authorization.scrollElementIntoViewToLeftWithNoElements(1);

    const isSkipButtonPresent = await Authorization.isElementPresent(Authorization.skipAuthPageOwnCount);
    const isNextButtonPresent = await Authorization.isElementPresent(Authorization.authFirstScreensNextBtn);

    // Making separate assertions for each conditions
    expect(isSkipButtonPresent).toBe(true,"Перевірка наявності кнопки пропустити");
    expect(isNextButtonPresent).toBe(false, "Перевірка наявності кнопки далі");

  });

  it("Test Authorization field 1 Page 3", async () => {
    driver.pause(5000);
    const actualText = await Authorization.authTopText.getText();
    
    expectChai(actualText).to.equal("Акції");
    
  });

  it("Test Authorization field 2 Page 3", async () => {
    driver.pause(5000);
    const authContentText = await Authorization.authContentText.getText();
    
    expectChai(authContentText).to.equal("Тут щотижня оновлюються акції Фора. Плануйте покупки та заощаджуйте.");
    
  }); 

});


describe("Authorization Splash Activity Tests3", () => {
  
  it("Test Authorization button Page 4", async () => {
    driver.pause(5000);
    await Authorization.scrollElementIntoViewToLeftWithNoElements(1);

    const isSkipButtonPresent = await Authorization.isElementPresent(Authorization.skipAuthPageOwnCount);
    const isNextButtonPresent = await Authorization.isElementPresent(Authorization.authFirstScreensNextBtn);

    // Making separate assertions for each conditions
    expect(isSkipButtonPresent).toBe(false,"Перевірка наявності кнопки пропустити");
    expect(isNextButtonPresent).toBe(true, "Перевірка наявності кнопки далі");

  });

  it("Test Authorization field 1 Page 4", async () => {
    driver.pause(5000);
    const actualText = await Authorization.authTopText.getText();
    
    expectChai(actualText).to.equal("Оплата платіжною карткою");
    
  });

 it("Test Authorization field 2 Page 4", async () => {
    driver.pause(5000);
    const authContentText = await Authorization.authContentText.getText();
    
    expectChai(authContentText).to.equal("Сплачуй за покупки та отримуй додаткову винагороду");
    
  });

});


