// merge parent conf object + add new changes in uat conf(baseurl,connectiontimeout)
const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config,{

    baseurl: 'http://localhost.com',
    waitforTimeout: 5000,

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep: 'sanity' //optional to run specific case
    },
})