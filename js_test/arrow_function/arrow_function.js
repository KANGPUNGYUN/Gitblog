// const foo = (x) => {
//     return x
// }

// 화살표함수는 매개변수가 1개일 경우 매개변수 괄호없이 사용가능합니다
// const foo = x => { 
//     return x
// }

// 화살표함수는 함수가 바로 리턴한다면, 중괄호와 return이 생략 가능합니다.
// const foo = x => x;

// 화살표함수는 매개변수가 2개며, 함수가 바로 리턴한다면, 중괄호와 return이 생략 가능합니다.
// const foo = (x, y) => x + y;

const foo = (x, y) => {
    console.log("두 줄 이상");
    return x + y;
}


console.log(foo(1, 5));