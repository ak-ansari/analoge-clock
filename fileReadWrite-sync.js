const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./folder/first.txt", "utf-8");

const write = writeFileSync(
  "./folder/firstwrite.txt",
  "hello this is ak ansari"
);
const second = readFileSync("./folder/sec.txt", "utf-8");
writeFileSync(
  "./folder/secrewrite.txt",
  "i have learnt how to creat a file using node"
);

console.log(first, second);
console.log(readFileSync("./folder/firstwrite.txt", "utf-8"));
console.log(readFileSync("./folder/secrewrite.txt", "utf-8"));
