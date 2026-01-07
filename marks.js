const user = [
  { name: "a", marks: 90 },
  { name: "b", marks: 35 },
  { name: "c", marks: 75 },
  { name: "d", marks: 22 },
];
const result = user.filter((u) => u.marks >= 40);
const result1 = user.filter((u) => u.marks <= 40);
console.log("pass", result);
console.log("fail", result1)
//filter,map,reduce//
const student = [
  { name: "a", marks: 40, attendence: 20 },
  { name: "b", marks: 70, attendence: 30 },
  { name: "c", marks: 90, attendence: 20 },
];
const total = student
    .reduce((total, stu) =>{total[stu.attendence] || 0) + 1;
return total;
    }, { });
console.log(result);
