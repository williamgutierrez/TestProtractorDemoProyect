// spec.js
describe('This is a suit for calculator', function() {
    it('This app will add two number', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        //ng-model="first"   //ng-model="second"    //id=gobutton
        element(by.model('first') ).sendKeys('5');
        element(by.model('second')).sendKeys('3');
        element(by.id('gobutton')).click();
        console.log("************************");
        element(by.css("h2[class='ng-binding']")).getText().then( (text)=>{
            console.log(text);
        }) ;

        expect( element(by.css("h2[class='ng-binding']")).getText()).toEqual('8');


      //  expect(browser.getTitle()).toEqual('Super Calculator');
    });


    it('This app will add two number2', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        //ng-model="first"   //ng-model="second"    //id=gobutton
        element(by.model('first') ).sendKeys('8');
        element(by.model('second')).sendKeys('1');
        element(by.id('gobutton')).click();
        console.log("************************");
        element(by.css("h2[class='ng-binding']")).getText().then( (text)=>{
            console.log(text);
        }) ;

        expect( element(by.css("h2[class='ng-binding']")).getText()).toEqual('9');

    });



});