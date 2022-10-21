const object = { a: 1, b: 2};

// 객체 안의 값이 상당히 많을 경우 하나씩 객체의 값을 선언해서 불러오는 것은 비효율적입니다. => 비구조화 할당 활용하기
// const a = object.a;
// const b = object.b;

// 비구조화 할당: 객체 안의 값을 쉽게 상수나 변수 안에 할당할 수 있습니다. 
const { a, b} = object;

console.log(a);
console.log(b);

// 비구조화 할당: 객체뿐만 아니라 배열 안의 값을 쉽게 상수나 변수 안에 할당할 수 있습니다. 
const array = [ 1, 2 ];
const [one, two] = array;

console.log(one);
console.log(two);