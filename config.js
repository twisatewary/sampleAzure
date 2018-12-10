exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['D:\\sampleAzure\\sampleSpec1.js'],

    directConnect:true,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
    },

};