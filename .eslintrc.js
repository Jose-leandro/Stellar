module.exports = {
    'env': {
      browser: true,
      node: true,
    },
    "extends": [
      "plugin:react/recommended",
      "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": "./tsconfig.json" // Add this line to reference your TypeScript project configuration
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "no-process-env": "off", // Disable the rule that might cause issues with process.env
    }
  }
