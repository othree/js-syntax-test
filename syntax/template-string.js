
var str1 = `abcde`;

var str2 = `abcde${str1}abcde`;

var str3 = `abcde${(function () { return 'abc'; }())}abcde`;

var str4 = `abcde${({prop1: 1, prop2: 'p'})['prop1']}abcde`;

var str5 = `abcde${({prop1: 1, prop2: `edcba${1}ebcda`})['prop1']}abcde`;

var str6 = `abcde${({
  prop1: 1, 
  prop2: `edcba${1}ebcda`
})['prop1']}abcde`;

var str7 = `abcde${(function () { 
  return `edcba${str1 + `zz${1}zz`}edcba`; 
}())}abcde`;

var str8 = tag1`abcd ${a}`

var str9 = `s${`<tag attr=${exp}>${exp}</tag>`}`

var str10 = `<tag attr=${exp}>${exp}</tag>`
`${`<tag attr=${exp}>${exp}</tag>`}`
