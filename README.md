# avalanche-js-utils

This package provides a collection of utility apis for unit conversions like `fromWei`, `toWei`, `hexToNumber`, `numberToHex`, `isAddress`, etc.

## Installation

```
npm install avalanche-js-utils
```

## Usage

Available units
```
const { Units } = require('avalanche-js-utils');

[Units.wei, '1'], // 1 wei
[Units.Kwei, '1000'], // 1e3 wei
[Units.Mwei, '1000000'], // 1e6 wei
[Units.Gwei, '1000000000'], // 1e9 wei
[Units.szabo, '1000000000000'], // 1e12 wei
[Units.finney, '1000000000000000'], // 1e15 wei
[Units.ether, '1000000000000000000'], // 1e18 wei
[Units.avax, '1000000000000000000'], // 1e18 wei
[Units.Kether, '1000000000000000000000'], // 1e21 wei
[Units.Mether, '1000000000000000000000000'], // 1e24 wei
[Units.Gether, '1000000000000000000000000000'], // 1e27 wei
[Units.Tether, '1000000000000000000000000000000'], // 1e30 wei
```

Converting between different units
```javascript
const { Units, Unit, numberToString, add0xToString, fromWei, toWei, numToStr} = require('avalanche-js-utils');
const { BN } = require('avalanche-js-crypto');

const avax = new Unit('1').asAVAX();
const avaxToGwei = avax.toGwei();
console.log(avaxToGwei);

// numberToString
const num = 123;
const str = numberToString(num)
console.log(str);

// add0xToString
const str = '12345';
const expected = add0xToString(str)
console.log(expected);

// fromWei
const Wei = new BN('1000000000000000000');
const expected = fromWei(Wei, Units.avax);
console.log(expected);

// toWei
const avax = new BN('1');
const expected = toWei(avax, hmy.utils.Units.avax);
const num = numToStr(expected);
console.log(num);
```