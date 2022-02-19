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

### useState vs useRef

`useRef(initValue)`: `amountRef` value sẽ dc preserve khi Component re-render (giống useState). Nhưng khi amountRef thay đổi, nó ko khiến Component bị re-render (khác useState)  
Vì vậy, value show ra trên UI thì dùng `useState`. Còn những thứ khác như form người dùng nhập vào thì dùng `useRef` sẽ đỡ bị re-render hơn. Những thứ constant thì dùng `JS variable` như bình thường.

### Controlled vs Uncontrolled Component with useRef

```jsx:Controlled.jsx
// State của <input> do React quản lý
// Gõ phím -> titleState update -> Value của <input> update theo
<input value={titleState} onChange={(e)=>setTitleState(e.target.value)} />
```

```jsx:Uncontrolled.jsx
// State của input là internal state, mình chỉ lấy value về bằng ref...
const titleRef = useRef();
// ...titleRef.current bây h chính là <input> -> Có thể gọi hàm ví dụ như titleRef.current.focus()
<input ref={titleRef} type='text' />
```

### Custom Hook

Được dùng cho những fn có Hook (Hook chỉ dc ở trong Function component/Custom hook) khi cần reuse nhiều chỗ, hoặc cho những component có logic na ná nhau (như một fn bình thường nhưng giờ có thêm Hook)

```jsx:useCounter.jsx
// Custom hook must start with "use"
function useCounter(isForward = true) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (isForward) {
      setInterval(() => setNum((n) => n + 1), 3000);
    } else {
      setInterval(() => setNum((n) => n - 1), 3000);
    }
  }, [isForward]);
  return num;
}
```

```jsx:HookUser.jsx
import useCounter from './useCounter.jsx';
function Forward() {
  const result = useCounter(false);
  return <h3>{result}</h3>;
}
```

### Usage

- **Manage Narrow State**: `useState` / `useReducer`(Complex State)
- **Manage Wide State**: `useContext` / Redux
- **Optimize**: `useMemo` / `useCallback` / `React.memo`
- **Side effect**: `useEffect`
