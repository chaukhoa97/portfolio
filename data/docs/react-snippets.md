---
title: 'React Snippets'
category: 'React'
draft: false
---

- **Pass callback vào `onClick`**
  ```jsx
  let a = <button onClick={() => dispatch('+')}>+</button>;
  ```
- **Module CSS**
  ```jsx
  import styles from '../nav.module.scss';
  <h1 className={`${styles['active-nav']} ${styles.red}`}>Hello</h1>;
  ```
- **`useState` dựa theo previous state**
  ```jsx
  const [count, setCount] = useState(0);
  <button onClick={() => setCount(count + 1)}>{count}</button>;
  ```
- **Lazy init**: `expenseviveFn` chỉ chạy ở lần render đầu tiên để tạo ra giá trị init của state

  ```jsx
  const expensiveFn = () => {
    console.log(100);
    return 100;
  };
  // Hoặc useState(() => expensiveFn()); KHÔNG PHẢI useState(expenseiveFn())
  const [lazy, setLazy] = useState(expensiveFn);
  ```

- **Portal**:

  ```jsx
  import { createPortal } from 'react-dom';
  const MyComponent = () => {
    return (
      <div>
        {createPortal(
          <h2>This h2 will be brought to #portal</h2>,
          document.querySelector('#portal') // nơi render trong index.html
        )}
      </div>
    );
  };
  ```
