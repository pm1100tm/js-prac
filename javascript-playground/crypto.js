/** @format */
/* CryptoJS 를 활용한 암복호화 예제 */
console.log('JS');

const CryptoJS = require('crypto-js');
const SECRET_KEY = 'nice npm';
const msg = 'my message';

/** Plain text encryption */
const ciphertext1 = CryptoJS.AES.encrypt(msg, SECRET_KEY).toString();
console.log(ciphertext1);

const bytes1 = CryptoJS.AES.decrypt(ciphertext1, SECRET_KEY);
const originalText = bytes1.toString(CryptoJS.enc.Utf8);
console.log(originalText); // 'my message';
console.log(msg === originalText); // true

/** Object encryption */
const dataObj = [{ id: 1 }, { id: 2 }];
const ciphertext2 = CryptoJS.AES.encrypt(JSON.stringify(dataObj), SECRET_KEY).toString();
console.log(ciphertext2);

// Decrypt
const bytes2 = CryptoJS.AES.decrypt(ciphertext2, SECRET_KEY);
const decryptedData = JSON.parse(bytes2.toString(CryptoJS.enc.Utf8));
console.log(decryptedData); // [{id: 1}, {id: 2}]
