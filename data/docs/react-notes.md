---
title: 'React Notes'
category: 'React'
draft: false
---

- Pass callback vào onClick
  ```js
  let a = <button onClick={() => dispatch('+')}>+</button>;
  ```
- Module CSS
  ```js
  import styles from '../nav.module.scss';
  <h1 className={`${styles['active-nav']} ${styles.red}`}>Hello</h1>;
  ```
