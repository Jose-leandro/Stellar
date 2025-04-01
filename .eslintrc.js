module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "prettier",
        "eslint:recommended",
        "next/core-web-vitals"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    "rules": {
        'prettier/prettier': 'error',
        'no-eval': 'error',               // Prevents using eval()
        'no-implied-eval': 'error',       // Prevents using strings in setTimeout() and setInterval()
        'no-new-func': 'error',           // Prevents using new Function() constructor
    }
}
