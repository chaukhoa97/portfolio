---
title: 'Re-render & DOM'
category: 'React'
draft: false
---

### <center>**Re-evaluating Components <span style={{color:'#E53E3E'}}>!==</span> Re-evaluating DOM**</center>

![](https://i.imgur.com/ykPsS7g_d.webp?maxwidth=1520&fidelity=grand)

- Mỗi khi state, props, hoặc context (nếu quy về vẫn là state) thay đổi → React re-render component functions.
- Parent component re-render → Tất cả các Child component re-render theo (trừ React.memo).
- **Virtual DOM**: Là 1 bản sao của DOM wrapped by a JS object, nơi mà việc cập nhật không gây ảnh hưởng hưởng tới Real DOM. Mỗi khi có state changes, React lấy snapshot của VDOM ngay lúc đó rồi so sánh với VDOM đã dc update (diffing). Những thay đổi này dc đưa đến ReactDOM library, và ReactDOM sẽ chỉ update Real DOM những gì cần update.
- **So sánh VDOM vs Real DOM**: Real DOM chậm hơn vì mỗi khi DOM thay đổi, trình duyệt cần phải dựng lại UI ở ngoài browser, so với những thay đổi chỉ xảy ra ở trong memory của VDOM. Điểm còn thiếu của VDOM là render những thay đổi đó ngoài browser sẽ dc xử lý bởi ReactDom library.
