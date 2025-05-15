# TypeScript 知识回顾

## 安装环境

```bash
npm install -g typescript

# 运行
tsc demo.ts   # 编译成 demo.js
node demo.js  # 运行
```

或者：
```bash
npm install -g ts-node typescript
ts-node demo.ts
```

## 基础语法

### 基本数据类型

```typescript
let name: string = "Tom";
console.log(name); // "Tom"

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
```

### 接口

```typescript
interface Person {
	name: string;
	age: number;
}

const tom: Person = {
	name: "Tom",
	age: 25
}
```

### 函数

```typescript
function add(a: number, b: number): number {
	return a+b;
}

const hello = (name: string): void => {
	console.log(`Hello, ${name}`);
}
```

### 类

```typescript
class Animal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	move(): void {
		console.lg(`${this.name} is moving`);
	}
}
```

### type别名，联合类型

```
type ID = string | number;
let userId: ID = 123;
userId = "abc";
```

### 泛型

```typescript
function identity<T>(arg: T): T {
	return arg;
}

let output = identity<string>("Hello");
```

### 类型断言：type assertion

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

### 模块导入导出

```typescript
export function sayHi(name: string) {
	console.log(`Hi, ${name}`)
}

import { sayHi } from './utils';
```

### 装饰器

```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	console.log(`${propertyKey} 被调用`);
}

class Test {
	@log
	sayHello() {
		console.log("Hello");
	}
}
```

### 枚举 Enum

```typescript
enum Direction {
	Up,
	Down,
	Left,
	Right
}
let dir: Direction = Direction.Up;
```

### 字面量类型

```typescript
let direction: 'up' | 'down' | 'left' | 'right' = 'up';
```

### 可选属性 & 只读属性

```typescript
interface User {
	id: number;
	name?: string // 可选
	readonly toke: string // 只读
}
```

### 交叉类型

```typescript
interface A { a: string }
interface B { b: number }
let obj: A & B = { a: "hello", b: 123 };
```

### 类型守卫

```typescript
function printId(id: string | number) {
	if (typeof id === "string") {
		console.log(id.toUpperCase());
	} else {
		console.log(id.toFixed(2));
	}
}
```

### 高级类型操作

```typescript
interface Person {
	name: string;
	age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'
const tom = { name: "Tom", age: 20 };
type TomType = typeof tom; // 推断为 {name: string; age: number}
type Options = 'a' | 'b' | 'c'
type OptionMap = { [key in Options]: number };
type IsString<T> = T extends string ? true : false;
```

### 函数重载

```typescript
function getInfo(id: number): string;
function getInfo(name: string): string;
function getInfo(value: any): string { return `Info: ${value}`; }
```

### 命名空间

```typescript
namespace MySpace {
	export const name = "TS";
	export function sayHi() {
		console.log("Hi")
	}
}
MySpace.sayHi();
```

### 声明合并

```typescript
interface Box {
	height: number;
}

interface Box {
	width: number;
}

let box: Box = {height: 100, width: 200};
```

### 非空断言

```typescript
let el = document.getElementById('app')!;
el.innerHTML = "Hello";
```

### 空值合并运算符 ??

```typescript
let name = undefined ?? "Default"; // ==> "Default"
```

### 条件类型

```typescript
type IsNumber<T> = T extends number ? "Yes" : "No"
```

### Never类型

```typescript
function error(message: string): never {
	throw new Error(message);
}
```

### 补充说明

```typescript
any: 任意类型，不安全
unknown: 不确定类型，比any更安全
never: 用不存在的类型，用来：抛异常，死循环
void: 函数没有返回值
object: 除基本类型以外的对象
null/undefined: 空值
```
