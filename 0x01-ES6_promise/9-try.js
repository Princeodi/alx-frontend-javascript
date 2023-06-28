function divideByTwo() {
  return 1000 / 2;
}

const queue = guardrail(divideByTwo);
console.log(queue);
