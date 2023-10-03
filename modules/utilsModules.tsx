export function checkValue(value: any): string {
  if (value === "" || value === undefined || value === null) return "-";
  else return value;
}
