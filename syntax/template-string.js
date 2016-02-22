
var str1 = `abcde`;

var str2 = `abcde${str1}abcde`;

var str3 = `abcde${(function () {}())}abcde`;

var str4 = `abcde${({prop1: 1, prop2: 'p'})['prop1']}abcde`;

var str5 = `abcde${({prop1: 1, prop2: `edcba${1}ebcda`})['prop1']}abcde`;

var str6 = `abcde${({
  prop1: 1, 
  prop2: `edcba${1}ebcda`
})['prop1']}abcde`;
