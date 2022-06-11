const { readFile, writeFile } = require("fs");
readFile("./folder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./folder/sec.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./folder/newasyncfile.txt",
      "new text is here",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  });
});
