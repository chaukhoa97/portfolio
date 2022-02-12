---
title: 'Hooks'
category: 'React'
draft: false
---

- **Manage Narrow State**: `useState` / `useReducer`(Complex State)
- **Manage Wide State**: `useContext` / Redux
- **Optimize**:
  - `React.memo(component)`: Chỉ re-evaluate component đó khi props của component thay đổi. Nếu dùng ở những high-level Node → Children của component đó cũng sẽ ko bị re-evaluate
  - `useCallback`: Khi app re-evaluate, function trong useCallback sẽ ko re-create lại.
  - `useMemo` (**ÍT DÙNG HƠN** `useCallback`): Chỉ dùng khi function này quá phức tạp (ex: Sort, fetch,...) mà value ko đổi (nhưng vẫn phải re-initialize vì đây là Reference)
- **Side effect**: `useEffect`
- **Similar component logic**: Custom hook
