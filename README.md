# dotenv-ex
Dotenv extension. Switch settings with NODE_ENV.

[![NPM](https://img.shields.io/npm/v/@sk39/dotenv-ex.svg)](https://www.npmjs.com/package/@sk39/dotenv-ex) 
8

## Install

```bash
npm install @sk39/dotenv-ex
```

## Usage

As early as possible in your application, require and configure dotenv.

```javascript
require('@sk39/dotenv-ex').config()
```

Create a `.env` file in the root directory of your project. Add
environment-specific variables on new lines in the form of `NAME=VALUE`.
For example:

```dosini
DEBUG=true
SERVER_URL="http://127.0.0.1:3000/"
NUMBER_FLAG=0
FLOAT_FLAG=0.0034
```

further. 
You can overwrite the NODE_ENV specific settings by creating a `.env.{NODE_ENV}` file.

`process.env` now has the keys and values you defined in your `.env` file.

```javascript
const env = require("dotenv-ex").config();
console.log(process.env.SERVER_URL)
```

