export const removeLeadingZeros = (str) => {
  return str.replace(/^0+/, "") || "0";
};
