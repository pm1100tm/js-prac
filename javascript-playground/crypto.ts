/** @format */
/* CryptoJS 를 활용한 암복호화 예제 */
console.log('TS');

import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import AES from 'crypto-js/aes';

const SECRET_KEY = 'nice npm';
const msg = 'my message';

/** Plain text encryption */
var cipherText = AES.encrypt(msg, SECRET_KEY).toString();
var bytes = AES.decrypt(cipherText, SECRET_KEY);
var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

console.log(cipherText);
console.log(decryptedData); // 'my message';
console.log(msg === decryptedData); // true

/** Object encryption */
let dataObj = [{ id: 1 }, { id: 2 }];
var cipherText = CryptoJS.AES.encrypt(JSON.stringify(dataObj), SECRET_KEY).toString();
var bytes2 = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
var decryptedData2 = JSON.parse(bytes2.toString(CryptoJS.enc.Utf8));

console.log(cipherText);
console.log(decryptedData2); // [{id: 1}, {id: 2}]
console.log(dataObj === decryptedData2); // false, 값은 같으나 참조 값이 다름
