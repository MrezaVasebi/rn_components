export const numberWithComma = (value: string | null | undefined): string | number => {
   if (value === null || value === undefined || value === "") return 0;
   else return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
