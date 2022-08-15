export const isNameValid = (value: string) => /^[a-zA-Z]$/.test(value);
export const isEmailValid = (value: string) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
