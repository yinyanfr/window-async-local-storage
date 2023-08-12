# window-async-local-storage

[![npm](https://img.shields.io/npm/v/window-async-local-storage.svg)](https://www.npmjs.com/package/window-async-local-storage)
![license](https://img.shields.io/npm/l/window-async-local-storage.svg)
![size](https://img.shields.io/github/repo-size/yinyanfr/window-async-local-storage)

Async localStorage for browser that provides the same interface as window.localStorage.

[Showcasing](https://yinyanfr.github.io/window-async-local-storage/)

## :star2: Features

- Fully compatible with window.localStorage
- 0 dependency
- Supports all API of [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/api)
- Can use IndexedDB as backend (Work in Progress)

## :green_book: Quick Start

```js
import AsyncLocalStorage from 'window-async-local-storage';
// import { getItem, setItem, removeItem, clear } from "window-async-local-storage";

await asyncLocalStorage.getItem('my-item');

await asyncLocalStorage.setItem('my-item', 12345);

await asyncLocalStorage.removeItem('my-item');

await asyncLocalStorage.clear();
```

For more API please refer to [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/api).

Please note that callbacks are not implemented as it is marked as legacy for AsyncStorage as well.

Can be used with `window.localStorage` at the same time:

```js
import { getItem } from "window-async-local-storage;

localStorage.setItem("my-item", "12345");

await getItem("my-item"); // 12345
```
