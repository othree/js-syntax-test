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

var a = 1;
a++;
++a;
a--;
--a;

a += 1;
a -= 1;

a = a + 100;
a = a + /* comment */ 100;

a+++; // expect to see invalid red
a---; // expect to see invalid red

