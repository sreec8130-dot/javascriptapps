const users = [
  { name: "A", age: 17 },
  { name: "B", age: 21 },
  { name: "c", age: 19 },
];
const result = users.filter((u) => u.age >= 18);
console.log(result);