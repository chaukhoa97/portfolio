---
title: 'React Snippets'
category: 'React'
draft: false
---

- Pass callback vào `onClick`
  ```jsx
  let a = <button onClick={() => dispatch('+')}>+</button>;
  ```
- Module CSS
  ```jsx
  import styles from '../nav.module.scss';
  <h1 className={`${styles['active-nav']} ${styles.red}`}>Hello</h1>;
  ```
- `useState` dựa theo previous state
  ```jsx
  const [count, setCount] = useState(0);
  <button onClick={() => setCount(count + 1)}>{count}</button>;
  ```
- Update all package:

  ```shell
  npm i -g npm-check-updates
  ncu -u
  npm i
  ```

- nvm:
  ```shell
  nvm i 10.24.1
  nvm use 10.24.1
  nvm list
  nvm use newest
  node -v
  ```
