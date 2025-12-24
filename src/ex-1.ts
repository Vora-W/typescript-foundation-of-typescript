function calculate(a: number, b: number, operator: string): number | string {
  //Start Coding Here
  let result;
  if (operator === "add") {
    result = a + b;
  } else if (operator === "subtract") {
    result = a + b;
  } else if (operator === "multiply") {
    result = a * b;
  } else if (operator === "divide") {
    result = a / b;
  } else {
    result = "Invalid operator";
  }
  return result;
}

console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2
console.log(calculate(10, 5, "mod")); // "Invalid operator"
