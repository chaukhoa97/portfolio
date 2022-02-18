---
title: 'React Terms'
category: 'React'
draft: false
---

- **Mount/Unmount**: Adding/Removing nodes to the DOM
- **Render**: Đưa vào/Thay đổi node ở trong DOM, nghĩa là với lần đầu đưa vào sẽ tương đương với Mount, những lần sau, khi state của component thay đổi, sẽ dc render lại (re-render) nhưng không phải là Mount (vì ko add thêm nodes vào DOM)
- **Props**: The object passed to the function component, included children.

  ```jsx
  // 2 Component đều có props.name & props.children
  const C1 = ({ name, children }) => <div id={name}>{children}</div>;
  const C2 = (props) => <div id={props.name}>{props.children}</div>;
  ```
