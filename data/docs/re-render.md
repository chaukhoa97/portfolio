---
title: 'Re-render'
category: 'React'
draft: false
---

### <center>**Re-evaluating Components <span style={{color:'#E53E3E'}}>!==</span> Re-evaluating DOM**</center>

![](https://i.imgur.com/ykPsS7g_d.webp?maxwidth=1520&fidelity=grand)

- Mỗi khi state, props, hoặc context (nếu quy về vẫn là **state**) thay đổi → React re-render component functions.
- Parent component re-render → Tất cả các Child component re-render theo (trừ **React.memo**).

### Key in Array of Items: Để React biết dc item nào dc thêm/sửa/xóa để ko re-render thừa thãi.

- A good rule of thumb is that elements inside the map() call need keys.
- Key của 1 element trong 1 array là thứ có giá trị riêng biệt với các element khác (siblings) của nó:
  1. **ID** của element từ dữ liệu.
  2. **Value** của element từ dữ liệu.
  3. Tệ nhất: Dùng **index** của element trong array.
