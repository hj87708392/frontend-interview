
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "html", //eslint-plugin-html插件
    ],
    "rules": {
        "no-alert": 1,//禁止使用alert confirm prompt
        "no-console": 2,//禁止使用console
    }
};