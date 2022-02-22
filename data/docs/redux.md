---
title: 'Redux'
category: 'React'
draft: false
---

![](https://i.imgur.com/Wtx9WvJ.png)
![](https://i.imgur.com/UFZ1opQ.png)

1. Component lấy dữ liệu từ Store để thể hiện trên UI (View).
2. Người dùng tương tác lên UI (Ex: onClick button ….).
3. Component đóng vai trò là Action Creator, Tạo ra action obj bằng 1 trong 2 cách:

   - Tự declare 1 action object (slice2 line 31)
   - Thunk: 1 async fn that returns the action object (slice2 line 16)

4. Component gọi hàm dispatch với tham số là action obj vừa tạo từ 1 trong 2 cách trên, bao gồm 2 property là type (để store biết nên gọi reducer nào) và payload (tham số cho hàm reducer).
5. Redux store dựa theo type của action object để gọi reducerFn tương ứng.
6. Update Store data dựa theo storeState & payload.
