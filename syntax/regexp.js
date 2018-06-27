var complex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function () {
  var re = /a/;

  if (!/b/) {}
  if (!!/b/) {}
  if (!!!/b/) {}
  if (!!!!/b/) {}

  if (+/b/) {}
  if (-/b/) {}
 
  if (+ /b/) {}
  if (- /b/) {}
 

  return /c/;

}

/d/g
/d/i
/d/m
/d/u
/d/y
/d/gimuy

/foo/
/foo\\/
/foo\//
/foo[\\]/
/foo[/]/
/foo\[/

/* Should not match regexp */
/foo[/
];
/foo\/
=1;
/foo[\]/
];
/foo[\\\]/
];

var a = 1;
a++;
++a;
a--;
--a;

a += 1;
a -= 1;

a = a + 100;
a = a + /* comment */ 100;

class Foo {
  constructor(args) {
    this.foo = args.replace(/\/$/, "");
  }
  
  bar(arg) {
    if (arg == 0) {}
  }
}


a+++; // expect to see invalid red
a---; // expect to see invalid red

