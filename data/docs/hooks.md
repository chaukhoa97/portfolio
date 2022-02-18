---
title: 'Hooks'
category: 'React'
draft: false
---

### Optimize

- `React.memo(component)`: Chỉ re-render component dc wrap bởi `React.memo` khi props của component thay đổi.
- `useCallback`: Khi Component re-evaluate, function trong useCallback sẽ ko re-create lại.
- `useMemo` (**ÍT DÙNG HƠN** `useCallback`): Chỉ dùng khi function này quá phức tạp (ex: Sort, fetch,...) mà value có dependency mới thay đổi.

```jsx:GrandParent.jsx
const GrandParent = () => {
  //1. GrandParent re-render, storedFn do có useCallback ko bị create lại.
  const storedFn = useCallback(() => 'Some value', []);
  //2. prop của Parent là storedFn ko bị create lại...
  return <Parent expensiveFn={storedFn} />;
};
export default GrandParent;
```

```jsx:Parent.jsx
const Parent = ({ expensiveFn }) => {
  const unStoredResult = expensiveFn(); // Create lại mỗi lần Parent re-render
  const storedResult = useMemo(expensiveFn, []); // Chỉ create lại khi dependency thay đổi
  return <Child a={expensiveFnResult} />;
};
//3. prop ko đổi + React.memo -> Parent sẽ ko re-render khi GrandParent re-render
export default React.memo(Parent);
```

### Usage

- **Manage Narrow State**: `useState` / `useReducer`(Complex State)
- **Manage Wide State**: `useContext` / Redux
- **Optimize**: `useMemo` / `useCallback` / `React.memo`

- **Side effect**: `useEffect`
- **Similar component logic**: Custom hook
