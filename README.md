# window-async-local-storage

[![npm](https://img.shields.io/npm/v/window-async-local-storage.svg)](https://www.npmjs.com/package/window-async-local-storage)
![license](https://img.shields.io/npm/l/window-async-local-storage.svg)
![size](https://img.shields.io/github/repo-size/yinyanfr/window-async-local-storage)

Async localStorage for browser that provides the same interface as window.localStorage

## Quick Start

```js
import localStorage from "window-async-local-storage";

await localStorage.getItem("my-item");

await localStorage.setItem("my-item", 12345);

await localStorage.removeItem("my-item");

await localStorage.clear();
```
