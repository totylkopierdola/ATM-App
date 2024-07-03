export const removeLeadingZeros = (str) => {
  return str.replace(/^0+/, "") || "0";
};

// withdraw validation
export const validateWithdrawal = (amount, balance) => {
  if (amount > balance) {
    return "You don't have enough funds";
  }

  if (amount % 10 !== 0) {
    return "Please enter a multiple of 10";
  }

  if (amount > 1000) {
    return "You can withdraw a maximum of 1000 PLN";
  }

  if (amount <= 0) {
    return "Please enter a valid amount";
  }

  return "";
};

//deposit validation
export const validateDeposit = (amount) => {
  if (amount <= 0) {
    return "Please enter a valid amount";
  }

  if (amount % 10 !== 0) {
    return "Please enter a multiple of 10";
  }

  if (amount > 5000) {
    return "You can deposit a maximum of 5000 PLN";
  }

  return "";
};
