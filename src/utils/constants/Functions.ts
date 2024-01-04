export const inputType = (idx: number, values: any) =>
  idx === 0 ? values?.name : idx === 1 ? values?.email : values?.phone;
export const errorType = (idx: number, errors: any) =>
  idx === 0 ? errors?.name : idx === 1 ? errors?.email : errors?.phone;
export const touchedType = (idx: number, touched: any) =>
  idx === 0 ? touched?.name : idx === 1 ? touched?.email : touched?.phone;


