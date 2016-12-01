#!/usr/bin/env node

var ip2int = require('./index.js');
var ipinfo = process.argv[2];
var info = ip2int.lookup(ipinfo);

process.stdout.write(info + '\n');

