const os = require("os");
const user = os.type();
console.log(user);
const currentos = {
  name: [`${os.type()}`, `${os.platform()}`],
  realese: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentos);
