export function removeLeadingZeros(num) {
  if (typeof num !== "string") {
    num = num.toString();
  }

  // Use a regular expression to remove leading zeros
  // The regex ^0+ matches one or more zeros at the beginning of the string
  const result = num.replace(/^0+/, "");

  // If the result is an empty string, it means the input was something like '0000'
  // In that case, return '0'
  return result === "" ? "0" : result;
}
