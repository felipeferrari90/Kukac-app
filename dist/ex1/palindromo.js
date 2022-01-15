"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPalindromeBetweenNumbers = void 0;
function getPalindromeBetweenNumbers(min, max) {
    let numbers = [];
    while (min <= max) {
        if (String(min) === String(min).split("").reverse().join(""))
            numbers.push(min);
        min++;
    }
    return numbers;
}
exports.getPalindromeBetweenNumbers = getPalindromeBetweenNumbers;
//# sourceMappingURL=palindromo.js.map