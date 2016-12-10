/**
 * @file ip lookup to int32
 * Created by zhangyatao on 2016/12/1.
 */
var util = require('util');
var net = require('net');
var os = require('os');

function getLocalIP() {
    var network = os.networkInterfaces();
    for (var len = network.en0.length; len-- >= 0;) {
        var info = network.en0[len];
        if (info.family === 'IPv4') {
            return info.address;
        }
    }
    return '127.0.0.1';
}

function ip2int(ip) {
    if (!util.isString(ip)) {
        return 0;
    }
    var isipv4 = net.isIPv4(ip);
    if (!isipv4) {
        return 0;
    }
    var ipPart = ip.split('.');
    var normalIp = ipPart.map(function (int) {
        return int & 0xff;
    });
    return (new Buffer(normalIp)).readUInt32LE(0, true);
}

function int2ip(int) {
    int = parseInt(int, 10);
    var buf = new Buffer(4);
    buf.writeUInt32LE(int, 0);
    var address = buf.toJSON().data;
    return address.join('.');
}

function lookup(info) {
    if (info === undefined) {
        return getLocalIP();
    }
    if (isNaN(info)) {
        return ip2int(info);
    }
    return int2ip(info);
}

module.exports.lookup = lookup;
module.exports.ip2int = ip2int;
module.exports.int2ip = int2ip;
module.exports.getLocalIP = getLocalIP;
