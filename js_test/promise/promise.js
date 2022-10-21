function sayHello() {
    return new Promise((resolve, reject) => {
        const hello = "Hello Hello";
        resolve(hello);
        //reject(new Error());
    });
}

// sayHello()
//     .then((resolvedData) =>{
//         console.log(resolvedData);
//         return resolvedData;
//     }) // then은 이전 then에서 리턴값이 존재한다면 연속적으로 then을 사용할 수 있습니다.
//     .then((resolvedData) =>{
//         console.log(resolvedData);
//         return resolvedData;
//     })
//     .then((resolvedData) =>{
//         console.log(resolvedData);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// then과 catch를 사용하지 않고도 async와 await를 이용하여 비동기로 사용할 수 있습니다.
async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();