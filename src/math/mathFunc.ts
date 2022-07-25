
export const getPages = (N: number) => {
  return new Array(N).fill(0).map((el: any, i: number) => el = i + 1);
}