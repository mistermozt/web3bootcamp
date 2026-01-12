function greet(name: string) {
  return `Hello, ${name}. Day 1 ready.`;
}

const now = new Date().toISOString();
console.log(greet("Web3 Bootcamp"));
console.log("Timestamp:", now);
