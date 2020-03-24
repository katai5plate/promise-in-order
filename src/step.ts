export default async <T extends unknown>(
  list: T[],
  cb: (elm: T, index: number, list: T[]) => Promise<unknown>,
  ms: number
): Promise<unknown[]> => {
  let res = [];
  let index = 0;
  for (const elm of list) {
    index++;
    res.push(
      await new Promise(r => {
        setTimeout(async () => {
          r(await cb(elm, index, list));
        }, ms);
      })
    );
  }
  return res;
};
