---
title: 'Re-render'
category: 'React'
draft: false
---

### <center>**Re-evaluating Components <span style={{color:'#E53E3E'}}>!==</span> Re-evaluating DOM**</center>

![](https://i.imgur.com/ykPsS7g_d.webp?maxwidth=1520&fidelity=grand)

- Mỗi khi state, props, hoặc context (nếu quy về vẫn là **state**) thay đổi → React re-render component functions.
- Parent component re-render → Tất cả các Child component re-render theo (trừ **React.memo**).
