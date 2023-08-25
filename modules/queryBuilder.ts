export const queryBuilder = (value: object): string => {
  if (typeof value !== "object") return "";
  else if (Object.keys(value).length === 0) return "";
  else {
    let result = "&";
    for (const key in value) {
      result += `${key}=${value[key as keyof typeof value]}&`;
    }
    return result.substring(result.length - 1, 0);
  }
};
