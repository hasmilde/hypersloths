const request = require('request')

var query = require('./query.json')

function read ( keys, user, cb) {

    query.params.chaincodeID = process.env.CHAINCODEID;
    query.params.ctorMsg.args = keys;
    query.params.ctorMsg.function = 'read';
    query.params.secureContext = user;

    var params = {
        method: 'POST',
        url: '',
        json: true,
        body: query
    }

    request(params, function(err, body, req){
        cb(err, body, req)
    })

}

function write (keys, user, cb) {

    query.params.chaincodeID = process.env.CHAINCODEID;
    query.params.ctorMsg.args = keys;
    query.params.ctorMsg.function = 'write';
    query.params.secureContext = user;

    var params = {
        method: 'POST',
        url: '',
        json: true,
        body: query
    }

    request(params, function(err, body, req){
        cb(err, body, req)
    })
}

module.exports = {
    write:write,
    read:read
}