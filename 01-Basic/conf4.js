exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['calculator-spec.js'],
 capabilities:{
        browserName:'chrome',
     chromeOptions: {
            args:["--headless"]
     }
 }
};