const getPalindromeBetweenNumbers = require("../dist/ex1/palindromo").getPalindromeBetweenNumbers

test('retornar 11 e 22 de palindromos entre 10 e 30',() => {
    expect(getPalindromeBetweenNumbers(10,30)).toEqual([11,22])
    expect(getPalindromeBetweenNumbers(10,30).length).toBe(2)
});

test('retornar array vazio de palindromos entre 105 e 110',() => {
    expect(getPalindromeBetweenNumbers(105,110)).toEqual([])
});