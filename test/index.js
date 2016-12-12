/**
 * Created by zhangyatao on 2016/12/1.
 */

var assert = require('assert');
var ip2int = require('../index');
assert.equal(285911232, ip2int.ip2int('192.168.10.17'));
assert.equal(16777343, ip2int.ip2int('127.0.0.1'));
assert.equal(0, ip2int.ip2int('127.0.0'));
assert.equal(0, ip2int.ip2int());
assert.equal('192.168.10.17', ip2int.int2ip(285911232));
assert.equal('127.0.0.1', ip2int.int2ip(16777343));
assert.equal('172.22.156.28', ip2int.lookup());
assert.equal(285911232, ip2int.lookup('192.168.10.17'));
assert.equal('192.168.10.17', ip2int.lookup(285911232));
assert.equal('172.22.156.28', ip2int.getLocalIP());

console.log('\nAll tests passed');