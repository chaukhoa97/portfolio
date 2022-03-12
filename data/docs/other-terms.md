---
title: 'Other Terms'
draft: false
---

### Headless CMS vs Traditional CMS

- **Traditional CMS**: Content -> Content Delivery Template -> Web pages
- **Headless CMS** (Strapi/Ghost): Content -> Raw JSON Data -> Any plaform (TV, Smart watch, mobile, etc.)

### Nodejs & Express

- **Nodejs**: A JS runtime environment that allow JS to run on the server in addition to running in the browser.
- **Express**: A Nodejs web application framework that provides a robust set of features for building SPA.

### Babel

Babel is a JS transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JS that can be run by older browsers.

### npm, npx, yarn

- package.json: **~**1.2.3 < 1.3.0 || **^**1.2.3 < 2.0.0
- `npm i` / `npm i -g`: Project Dependencies / Global Dependencies.
- `npm i --save-dev`: Development Only -> Không có trong Production.
- `npx`: Chỉ execute chứ ko cài -> Dùng cho các lib chỉ chạy 1 lần trong vòng đời dự án như `create-react-app`.
- `yarn`: Chạy song song + cached so với Chạy tuần tự + ko cached của `npm`.
