---
title: "React Notes"
date: "2021-01-01"
---

- Pass callback vào onClick
  ```js
  let a = <button onClick={() => dispatch("+")}>+</button>;
  ```
- Module CSS
  ```js
  import styles from "../nav.module.scss";
  <h1 className={`${styles["active-nav"]} ${styles.red}`}>Hello</h1>;
  ```
