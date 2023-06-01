 describe("Test suite", async () => {
    
  it("Login Fail page", async () => {
    //this.retries(2)  how to rerun flaky test if it fails
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    const pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual("LoginPage Practise | Rahul Shetty Academy23");
    // or console.log(await browser.getTitle());
    // or expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
    
    await $("input[name='username']").setValue("rahulshettyacademy");
    await browser.pause(3000);
    await $("#username").setValue("secondCSS");
    const password = $("//input[@type='password']");
    await password.setValue("learning123");
    await $("#signInBtn").click();
    //await browser.pause(3000);
    console.log(await $(".alert-danger").getText());
    await browser.waitUntil(async ()=> await $("#signInBtn").getAttribute('value') === 'Sign In', 
    {
        timeout: 5000,
        timeoutMsg: 'Error message is not showing up'
    });
    console.log(await $(".alert-danger").getText());
    await expect($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning");

  }); 

  it('Login success page Smoke', async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("input[name='username']").setValue("rahulshettyacademy");
    const password = $("//input[@type='password']");
    await password.setValue("learning");
    await $("#signInBtn").click();
    await $(".btn-primary").waitForExist();
    await expect(browser).toHaveUrlContaining("shop");
    await expect(browser).toHaveTitle("ProtoCommerce");


  });

})