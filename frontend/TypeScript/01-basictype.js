var myname = "Tom";
console.log(myname); // "Tom"
var age = 25;
console.log(age); // 25
var isOk = true;
console.log(isOk); // true
var list = [1, 2, 3];
console.log(list); // [1, 2, 3]
var tuple = ["Tom", 25];
console.log(tuple); // ["Tom", 25]
var anyValue = "any type of data";
console.log(anyValue); // "any type of data"
var unknownValue = 123;
console.log(unknownValue); // 123
// 需要类型断言才能安全使用 unknown
if (typeof unknownValue === "number") {
    console.log(unknownValue + 1); // 124
}
