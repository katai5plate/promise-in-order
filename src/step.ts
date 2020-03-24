export default async <R = any, T = any>(
  list: T[],
  cb: (elm: T, index: number, list: T[]) => Promise<any>,
  ms: number
): Promise<R[]> => {
  let res: R[] = [];
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
