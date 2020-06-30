const dotenv = require("dotenv");
const path = require("path");
const config_path = path.resolve(".env");

const dotenvFiles = [
    `${config_path}.local`,
    `${config_path}.${process.env.NODE_ENV}`,
    `${config_path}`
]
let keys = {};
dotenvFiles.forEach(path => {
    const _env = dotenv.config({path, silent: false})
    if (_env.parsed) {
        Object.keys(_env.parsed).forEach(key => keys[key] = true)
    }
})

function middleware(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (!isNaN(value)) return Number(value);
    return value || null;
}

function config() {
    let env = {};
    Object.keys(keys).forEach(key => {
        if (process.env[key] != null)
            env[key] = middleware(process.env[key])
    })
    return env;
}

module.exports = {
    config
};
