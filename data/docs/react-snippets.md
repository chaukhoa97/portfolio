---
title: 'React Snippets'
category: 'React'
draft: false
---

- **`useState` update dựa theo previous state; Lazy init - `expenseviveFn` chỉ chạy ở lần render đầu tiên để tạo ra giá trị init của state; Pass callback vào `onClick`**

  ```jsx
  const expensiveFn = () => 100;
  // Hoặc useState(() => expensiveFn()); KHÔNG PHẢI useState(expenseiveFn())
  const [count, setCount] = useState(expensiveFn);
  <button onClick={() => setCount(0)}>Reset</button> // Normal
  <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>; // Theo prev state
  ```

- **Module CSS**

  ```jsx
  import styles from '../nav.module.scss';
  <h1 className={`${styles['active-nav']} ${styles.red}`}>Hello</h1>;
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
