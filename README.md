# ip2int

Convert ip to int32 and vice versa.

## Install

Install with [npm](http://github.com/isaacs/npm):

You can installed into the global.
```shell
$ npm install -g ip2int
```

Also installed into the project.
```shell
$ npm install ip2int --save
```
## Contributing / Testing
```shell
$ npm run test
```
## Command Line
If you do not enter any value, the default return to the machine IP address
```shell
$ ip2int [ip_address | int32]
```
E.g.
```shell
$ ip2int 127.0.0.1
  16777343

$ ip2int 16777343
  127.0.0.1
    
$ ip2int
  172.22.156.37
```
## API

### ip2int.lookup(addressInfo)
Lookup address info.

```js
var ip2int = require('ip2int');

ip2int.lookup('127.0.0.1');         // => 16777343
ip2int.lookup(16777343);            // => '127.0.0.1'
ip2int.lookup();                    // => 172.22.156.37
```

### ip2int.ip2int(ip)
The ip address resolves to int32

```js
ip2int.ip2int('192.168.10.17');   // => 285911232
```

### ip2int.int2ip(int)
Int32 resolve to ip address

```js
ip2int.int2ip(285911232);       // => '192.168.10.17'
```

### ip2int.getLocalIP()
Get the machine ip address (IPv4)

```js
ip2int.getLocalIP();        // => '172.22.156.37'
```

