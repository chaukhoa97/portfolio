---
title: 'Data Route'
category: 'React'
draft: false
---

- **Moving State down**:

```jsx:Parent.jsx
const Parent = () => {
  const parentData = 'random data';
  return <Children childProp1={parentData} />;
};
```

- **Lifting Content up**:

```jsx:Parent.jsx
const Parent = () => {
  const handleChildrenButton = (value) => value + 1;
  return <Children onChildrenButtonClick={handleChildrenButton} />;
};
```

```jsx:Children.jsx
const Children = () => {
  const childrenData = 10;
  return <button onClick={() => props.onChildrenButtonClick(childrenData)} />;
};
```
