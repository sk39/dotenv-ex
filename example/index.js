const env = require("@sk39/dotenv-ex").config();

console.log("env", env);

console.log("process.env");
console.log(` DEBUG=${process.env.DEBUG}`);
console.log(` SERVER_URL=${process.env.SERVER_URL}`);
console.log(` NUMBER_FLAG=${process.env.NUMBER_FLAG}`);
console.log(` FLOAT_FLAG=${process.env.FLOAT_FLAG}`);
