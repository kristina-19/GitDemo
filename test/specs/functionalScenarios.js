const expectchai = require('chai').expect
describe("Functional Testing on Application", async () => {

xit("Scroling and Mouse hover", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#show-textbox").scrollIntoView();
    await browser.pause(3000);
    //await $("#show-textbox").moveTo(); //?????
    //await browser.pause(3000);
    await $("#show-textbox").click();
    await browser.pause(3000);
    

  });


  xit("Double click", async () => {
    await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html");
    await $("button").doubleClick();
    await browser.isAlertOpen();
    //expectchai(await browser.isAlertOpen()).to.be.true //?????
   //expectchai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..") //?????
   //await browser.acceptAlert()
    await browser.pause(3000);

  }); 

  it("Web Tables Sort validation", async () => {
      await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
      await $("tr th:nth-child(1)").click();
      //retrive list of veggie names into array A
      //sort the array A ->Array B
      //compare Array A and Array B //fail
      const veggiesLocators = await $$("tr td:nth-child(1)");
      const OriginalveggiesNames = await veggiesLocators.map(async veggie => await veggie.getText());
      console.log(OriginalveggiesNames);
      veggies = OriginalveggiesNames.slice();
      sortedVeggies = veggies.sort();
      console.log(sortedVeggies);
      expectchai(OriginalveggiesNames).to.eql(sortedVeggies);
  });

  xit("Web Tables Filter validation", async () => {
      await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
      await browser.pause(3000);
      await $("input[type='search']").setValue("tomato");
      await browser.pause(3000);
      const veggieLocators = await $$("tr td:nth-child(1)");
      await expect(veggieLocators).toBeElementsArrayOfSize({eq:1});
      console.log(await veggieLocators[0].getText());
      await browser.pause(3000);
      await expect(await veggieLocators[0]).toHaveTextContaining("Tomato")

  }); 
});




