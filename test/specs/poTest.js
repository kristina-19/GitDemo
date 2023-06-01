const loginPage = require('../pageObjects/loginPage');
const shopPage = require('../pageObjects/shopPage');
const reviewPage = require('../pageObjects/reviewPage');
const expectchai = require('chai').expect
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/loginTest.json'))
let e2ecredentials = JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe("Test suite", async () => {
    
    credentials.forEach( ({userName, password}) => {
    xit("Login Fail page", async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("LoginPage Practise | Rahul Shetty Academy"); 
        await loginPage.Login(userName,password)   
        console.log(await loginPage.alert.getText());
        await browser.waitUntil(async ()=> await loginPage.signIn.getAttribute('value') === 'Sign In', 
        {
            timeout: 5000,
            timeoutMsg: 'Error message is not showing up'
        });
        console.log(await loginPage.alert.getText());
        await expect(await loginPage.textInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning");
    });

    }); 

    e2ecredentials.forEach( ({products}) => {
    it("End to End Test", async () => {
        //const products = ['iphone X', 'Blackberry'];
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await loginPage.Login("rahulshettyacademy","learning") 
        await shopPage.checkout.waitForExist();
        await shopPage.addProductsToCart(products);
        await shopPage.checkout.click();
        sumOfProducts = await reviewPage.sumOfProducts();
        totalIntValue = await reviewPage.totalFormattedPrice();
        
        expectchai(sumOfProducts).to.equal(totalIntValue);
        await $(".btn-success").click();
        await $("#country").setValue("ind");
        await $(".lds-ellipsis").waitForExist({reverse:true});
        await $("=India").click();
        await $("input[type='submit']").click();
        await expect($(".alert-success")).toHaveTextContaining("Success");
       });
    });
});