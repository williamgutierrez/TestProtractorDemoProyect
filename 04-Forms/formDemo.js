describe("Form Demo", function () {
    xit('Should work with Forms',function () {

        browser.get("https://qaclickacademy.github.io/protocommerce/");
     element(by.name('name')).sendKeys("Claudio");
     element(by.css("input[name='email']")).sendKeys('superbad2007@gmail.com');
     element(by.id("exampleInputPassword1")).sendKeys('12345');
     element(by.css("input[type='checkbox']")).click();
     element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
     element.all(by.name("inlineRadioOptions")).first().click();

     element(by.name("bday")).sendKeys("1111112000");
     // element(by.buttonText("Submit")).click().then( (text)=>{
        //      //     console.log(text);
        //      // });
        element(by.buttonText("Submit")).click().then(function () {
            element(by.css("div[class*='success']")).getText().then( (texto)=>{
               console.log(texto);
                //como muetra el texto podria hacer q compare con el expect
                expect(texto).toContain("Success");
            } );
        });

    });


    //1- Automatizar el caso negativo del formulario cuando colocan un name de una sola Letra "M"
    it('Menssage faild input name', function () {

        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name('name')).sendKeys("M");

        element(by.css("input[name='email']")).click();
        //console.log(element(by.xpath("//div[contains(text() ,'Name should be at least 2 characters')]")).getText());
        element(by.css("div[class*='alert alert-danger']")).getText().then((texto)=>{
            console.log(texto);
            expect(texto).toEqual("Name should be at least 2 characters");
        })


    });


});