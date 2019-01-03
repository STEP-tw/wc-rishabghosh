module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es6": true
  },

  "extends": "eslint:recommended",

  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  
  "rules": {
    "no-console": "off",
    "indent": [ "error", 2 ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ]
  }

};
