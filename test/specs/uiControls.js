//const expectchai = require('chai')

describe("UI Controls", async () => {
    
    it("UI Controls Smoke", async () => {
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
      await $("input[name='username']").setValue("rahulshettyacademy");
      const password = $("//input[@type='password']");
      await password.setValue("learning");
      const radioButtons = await $$(".customradio");
      const userDropDown = radioButtons[1];
      await userDropDown.$("span").click();             
      const modal = await $(".modal-body");
      await modal.waitForDisplayed();
      await $("#cancelBtn").click();
      console.log(await $$(".customradio")[0].$("span").isSelected());
      await userDropDown.$("span").click(); 
      await modal.waitForDisplayed();
      await $("#okayBtn").click();
      await $$(".customradio")[0].$("span").click();
      await expect(modal).not.toBeDisplayed();
      const dropDown = await $("select.form-control"); //selected tag important
      await dropDown.selectByAttribute('value', 'teach');
      await dropDown.selectByVisibleText("Consultant");
      await dropDown.selectByIndex(0);
      await browser.pause(3000);
      await dropDown.getValue();
      //expectchai(await dropDown.getValue()).to.equal("stud") //chai assertions


    }); 

    xit("Dynamic DropDownControls", async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $("#autocomplete").setValue("Ind");
        await browser.pause(3000);
        let ithems = await $$("[class='ui-menu-item'] div");
        for(var i = 0; i<await ithems.length; i++)
        {
            if(await ithems[i].getText() ==="India")
            {
                await ithems[i].click()
                //await browser.pause(4000);
            }
        }
    }); 
    
    
    it("Checkboxes Identification", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    const element = await $$("input[type='checkbox']");
    await element[1].click();
    console.log(await element[1].isSelected());
    console.log(await element[2].isSelected());
    await browser.saveScreenshot("screenshot.png");

    });
});

/*
    //how to choose radiobutton
      const radioButtons = await $$("radiotextsty");
      const userDropDown = radioButtons[1];
      await userDropDown.click();
      */