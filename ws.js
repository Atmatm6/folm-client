var WebSocket = require('ws');
var ws;
var exports = module.exports;
exports.start = function(){
    ws = new WebSocket("https://folm.herokuapp.com/ws");
}