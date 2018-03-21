
let array: number[] = [1, 2, 3.14, 42];
let theAnswer: number = array[3]; // 42
let offTheEnd: number = array[100]; // No error

let array2: Array<string> = ["an alternate", "syntax", "for arrays"];

let p: Promise<*> = fetch('');

function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

var a:string = 'a';

async function pullOne (id: string): Promise<*> {
  // comment!!
  return 1;
}

class test {
  async pallZero (id: string): number {
    return 0;
  }
  async pullZero (id: string): void {
    return 0;
  }
  async pullOne (id: string): Promise<*> {
    return 1;
  }
}

var foo1 = bar ? bar : null;
var foo2 = bar ? bar : void;

foo1 = null;
foo2 = void;
