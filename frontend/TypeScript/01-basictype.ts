let myname: string = "Tom";
console.log(myname); // "Tom"

let age: number = 25;
console.log(age); // 25

let isOk: boolean = true;
console.log(isOk); // true

let list: number[] = [1, 2, 3];
console.log(list); // [1, 2, 3]

let tuple: [string, number] = ["Tom", 25];
console.log(tuple); // ["Tom", 25]

let anyValue: any = "any type of data";
console.log(anyValue); // "any type of data"

let unknownValue: unknown = 123;
console.log(unknownValue); // 123

// 需要类型断言才能安全使用 unknown
if (typeof unknownValue === "number") {
  console.log(unknownValue + 1); // 124
}