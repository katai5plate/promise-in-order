# promise-in-order

Execute Promise sequentially.

```js
const { step } = require("promise-in-order");
(async () => {
  const results = await step(
    ["https://api.ipify.org/?format=json", "https://ipapi.co/json"],
    async url => (await fetch(url)).json(),
    1000
  );
  console.log({ results });
})();
```

```ts
import { step } from "promise-in-order";
interface Result {
  [key: string]: any;
}
(async () => {
  const results = await step<Result, string>(
    ["https://api.ipify.org/?format=json", "https://ipapi.co/json"],
    async url => (await fetch(url)).json(),
    1000
  );
  console.log({ results });
})();
```
