# promise-step

Execute Promise sequentially.

```js
const { step } = require("promise-step");
const results = await step(
  ["https://api.ipify.org/?format=json", "https://ipapi.co/json"],
  async url => (await fetch(url)).json(),
  1000
);
console.log({ results });
```

```ts
import { step } from "promise-step";
const results: {}[] = await step(
  ["https://api.ipify.org/?format=json", "https://ipapi.co/json"],
  async url => (await fetch(url)).json(),
  1000
);
console.log({ results });
```
