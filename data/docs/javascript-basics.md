---
title: 'JavaScript Basics'
category: 'JavaScript'
draft: false
---

#### `Hoisting`: Là quá trình đưa các khai báo hàm (function declaration) và khai báo biến lên trên đầu trang, nó được thực hiện tự động bởi JavaScript Engine.

```js
add(3, 4); //* returns 7
// Function declaretion -> hoisting lên đầu
function add(num1, num2) {
  return num1 + num2;
}

//* Function expression -> ko hoisting
subtract(7, 4); //! Uncaught TypeError: subtract is not a function
var subtract = function (num1, num2) {
  return num1 - num2;
};
```

#### `Closure` bao gồm: Function và References tới các biến ở outer scope của function đó (Lexical Environment). Trong JS, closures của 1 function dc tạo ra ở thời điểm declare function đó.

```js
function f1() {
  let x = 0; // Dc giữ lại trong closure
  let y = 0; // Dc dọn dẹp bởi garbage collector
  return function f2() {
    // f2 truy cập dc variables ở outer scope
    x += 2;
    console.log(x);
    return x;
  };
}
const f3 = f1(); // execute f1() returns f2 -> những biến ở outer scope của f2 sẽ dc giữ lại.
f3(); //1 2
f3(); //1 4
console.log(x); // ReferenceError: Biến x chỉ dc sử dụng trong f1
```

#### Shallow Copy vs Deep Copy:

```js
var obj = [{ a: 1 }, { b: 2 }]; // _isEqual -> true; == -> false
var shallow = _.clone(obj);
console.log(shallow[0] === obj[0]); // => true
var deep = _.cloneDeep(obj);
console.log(deep[0] === obj[0]); // => false
```

#### var let const

|       |      Scope      |  Hoisting + Init value  | Re-declare | Update |
| :---: | :-------------: | :---------------------: | :--------: | :----: |
|  Var  | Global/Function |     ✔️ (undefined)      |     ✔️     |   ✔️   |
|  Let  |      Block      | ✔️(must be initialized) |     ❌     |   ❌   |
| Const |      Block      |   ✔️(not initialized)   |     ❌     |   ✔️   |

- **const property update**:

```js:Ok.js
const obj = {};
obj.foo = "bar"; // {foo : 'bar'}
obj.foo = "bar2"; // {foo : 'bar2'}

const ar = [];
ar.push("foo"); // ['foo']
ar.pop(); // []
```

```js:Error.js
const text = "a";
text = "b"; // error - re-assigning
const text = "c"; // error - re-declaring

obj = { key1: "foo" }; // error - re-assigning
const obj = { key1: "foo" }; // error - re-declaring
```

#### Types

- **Primitive**:

  - string; number (NaN - Not a Number vẫn đc tính là number, Infinity, -Infinity); boolean; undefined;
  - null (typeof null === “object”) // Mặc dù behavior giống primitive nhưng lại là object
  - Ít dùng: symbol; bigint

- **Reference**:
  - object; array (typeof Object/Array === “object”)
  - function (typeof Function === “function")
  - Ít dùng: date; regexp; error;

#### ETC

- **Axios vs Fetch**: Fetch phải tốn thêm 1 promise (.json()), ngoài ra trong các lệnh như POST,PATCH,... phải convert data bằng JSON.stringify. Axios có thể trực tiếp handle error còn Fetch thì phải check response.ok
- **Optional Chaning**: `?.` - nếu ko có, dừng lại và trả về undefined
- **Falsy values**: 0, “”, false, null, undefined, NaN
- **Nullish coalescing**: `??`
  - `Truthy && expr` -> expr
  - `Falsy || expr` -> expr
  - `null/undefined` ?? expr -> expr
- `==` - chỉ so value -> null == undefined vs `===` - so luôn cả type
- ![](https://imgur.com/SsK9doN.png)
- [Sự khác biệt map và weakmap](https://kieblog.vn/javascript-su-khac-biet-map-va-weakmap/)
