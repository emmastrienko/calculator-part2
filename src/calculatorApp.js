const addition = (num1, num2) => {
  return num1 + num2;
};

const subtraction = (num1, num2) => {
  return num1 - num2;
};

const multiplication = (num1, num2) => {
  return num1 * num2;
};

const division = (num1, num2) => {
  if(num2 === 0) {
    return "error";
  } else {
    return num1 / num2;
  }
};

module.exports = { addition, subtraction, multiplication, division };
