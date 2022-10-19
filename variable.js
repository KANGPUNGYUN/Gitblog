// 1. Use strict
// added in ES 5
// use this for Valina JavaScript
'use strict';

// 2. Variable
// let (added in ES6): mutable data type

// 어플리케이션이 실행되면 어플리케이션마다 사용할 수 있는 메모리가 생성되어진다. let이라는 키워드로 name이라는 변수를 정의한다면 하나의 박스를 가리키는 포인터가 생기게 됩니다. 이 박스에 값을 할당할 수 있으며, let이라는 키워드로 재할당이 가능합니다.

// block scope는 블록 밖에서 더이상 블록 안의 있는 내용을 볼 수 없으며 블럭 안에서의 내용끼리만 사용가능하게 되어지는데, 여기서 블록스코프란 블록 안의 범위를 뜻합니다.
// global scope는 전역에서 사용하는한 범위를 의미하고 어플리케이션이 실행되기 시작부터 끝날때까지 항상 메모리에 탑재되어있기 때문에 최소한으로 사용하는 것이 좋다. 참고로 클래스나 함수를 이용하여 사용하는 것을 권장한다.

let globalName = 'global name';
{
    let name = 'pung';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var는 ES6 이전에 변수를 선언하는 키워드였는데 이를 사용하지 않는 것을 권장합니다.
// var hoisting(move declaration from bottom to top)
// var는 1. 블록스코프를 가지지 않아 유연하다고 할 수 있지만, 2. 전역에서 사용가능하기 때문에 복합한 코드의 어플리케이션에서는 선언하지 않은 값들이 할당되는 오류가 발생할 수 있다.

console.log(age) // undefined
{
    age = 4;
    var age;
}
console.log(age) // 4

// 3. Constants
// favor immutable(변경 불가능한) data type always for a few reason:
// - security (다른 해커들이 코드를 삽입해서 값을 변경하는 것이 가능하나 immutable data type는 이를 방지할 수 있다)
// - thread safety (어플리케이션이 실행되면 프로세스가 할당되고 그 프로세스 안에서 다양한 스레드가 동시에 변수에 접근해 값을 변경할 수 있는데 이는 위험한 과정입니다. immutable data type는 이를 방지할 수 있습니다.)
// - reduce human mistakes (인간의 실수 방지)
const dayInWeek = 7;
const maxNumber = 5;

// 4. Variable type
// primitive, single item(더 이상 나누어질 수 없는 원시타입): number, string, boolean, null, undefined, symbol
// object, box container(여러 primitive들을 하나의 단위(박스)로 관리)
// function, first-class function(함수도 다른 데이터 타입처럼 변수에 할당이 가능하기 때문에 함수를 파라미터(인자)로, 리턴 타입으로도 함수가 리턴하는 것이 가능하다)

// number - speicla numeric values: infinity, - infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ (2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value (0이 아닌 수나 문자열 등)
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // 아무런 값도 없다라는 의미에 null 값이 할당
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 값이 정의되어있는지 모르는 상태일때 아무런 값이 할당되어있는 않는 상태
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const pung = { name: 'pung', age: 26 }; // pung라는 object는 변경할 수 없지만, 그 안 존재하는 포인터들(name, age)의 값을 할당할 수 있다.
pung.age = 27;

// 5. Dynamic typing: dynamically typed language
let text = 'hello'
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number
console.log(text.charAt(0)); // error: charAt은 문자열 메서드인데 number에서 사용했기 때문에 에러, 개발자가 런타임으로 변수 타입을 고려하지 않는다면 다음과 같은 심각한 문제가 발생할 수 있습니다.