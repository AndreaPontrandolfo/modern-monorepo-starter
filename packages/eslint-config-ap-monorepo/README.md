# @andreapontrandolfo/eslint-config

## This is a opinionated Eslint config.

### Prettier interop

#### If you want to customize the included prettier config to your liking, you need to override the prettier rules in the .eslintrc config file.
#### Here is an example:
```
module.exports = {
  extends: ['@andreapontrandolfo/eslint-config'],
  rules: {
    'prettier/prettier': [
      2,
      {
        semi: false,
        // other custom rules...
      },
    ],
  },
}
```