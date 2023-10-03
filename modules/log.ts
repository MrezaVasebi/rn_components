export function normalLog(value: any) {
  console.log(value);
}

export function nestedLog(value: any) {
  console.log(JSON.stringify(value, null, 2));
}
