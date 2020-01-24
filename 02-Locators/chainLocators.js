describe('Chain Locators Demo', function() {
    it('This app should use  * multiplicador', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        //ng-model="first"   //ng-model="second"    //id=gobutton
        element(by.model('first') ).sendKeys('5');
        element(by.model('second')).sendKeys('3');

        //element(by.model("operator")).element(by.xpath("//option[contains(text(),'*')]")).click();
        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
        element(by.id('gobutton')).click();
        console.log("************************");
        element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then((text)=>{
            console.log(text);
        });

        expect(element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText()).toEqual('15');



    });

});