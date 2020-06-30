const dotenv = require("dotenv");
const path = require("path");
const config_path = path.resolve(".env");

const dotenvFiles = [
    `${config_path}.local`,
]
if (process.env.NODE_ENV) {
    dotenvFiles.push(`${config_path}.${process.env.NODE_ENV}`)
}
dotenvFiles.push(`${config_path}`)
dotenvFiles.forEach(path => {
    let _v = dotenv.config({path, silent: true})
    console.log(_v);
})

function middleware(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (!isNaN(value)) return Number(value);
    return value || null;
}


function config() {
    let env = {};
    for (let key in process.env) {
        if (process.env[key]) {
            env[`process.env.${key}`] = middleware(process.env[key])
        }
    }

    return env;
}

module.exports = {
    config
};
