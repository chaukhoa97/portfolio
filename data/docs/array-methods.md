---
title: 'Array Methods'
category: 'JavaScript'
draft: false
---

```js
//! Basics
const numbers = [3, 4];
numbers.push(5, 6); // Thêm vào cuối - [3, 4, 5, 6]
numbers.pop(); // Xóa số cuối - [3, 4, 5]
numbers.unshift(1, 2); // Thêm vào đầu - [1, 2, 3, 4, 5]
numbers.shift(); // Xóa số đầu - [2, 3, 4, 5]
numbers.reverse(); // Đảo ngược - [5, 4, 3, 2]
numbers.splice(2, 1, 'a', 'b'); // (fromIndex, deleteCount, item1, item2, ...)

//* Set
uniqueArray = [...new Set(array)];

//* Filters, every, some - Same arguments: .filter((value,index,array)=>{...})
let numbers = [1, 2, 3, 4];
const allPositive = numbers.every((value) => value >= 0); // true
const atLeastOneNegative = numbers.some((value) => value <= 0); // false
const f = numbers.filter((n) => n > 5); //* New array

//* .concat & .slice Array
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second); // [1, 2, 3, 4, 5, 6]
const sliced = combined.slice(2, 5); // Ko tính end; cũng có thể dùng .slice(`omit`) để shallow copy

//1 Map & forEach
const arr = [1, 2, 3, 4, 5];
//* Map: Creating a NEW array containing output of some processing done on each element of the array.
const mappedArray = arr.map((value, index, array) => element.children);

//! forEach: Executes a provided function once per array element. For example, saving all elements in the database.
arr.forEach(
  (currentValue, index, arr) => arr[index] === currentValue, //! Dummy callback
  thisValue // The value used as the function's "this" value
); // returns undefined

//! Sort
// a - b <= 0 -> a, b giữ nguyên vị trí (vẫn a xếp trước b), còn > 0 thì đổi chỗ
anotherCombined.sort((a, b) => a - b);
// Sort theo text alphabet
users.sort((a, b) => a.firstname.localeCompare(b.firstname));
```
