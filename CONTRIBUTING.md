* Fork the repository
* Clone it on your PC
* `npm install` or `yarn install`
* Make changes, commit open PR 

### Notes
* If you use 3rd party libraries/components in more than 1 place make sure to define them globally for ease of use
  Example
  ```js
  Object.defineProperty(Vue.prototype, '$Chartist', {
    get() {
      return Chartist;
    }
  });
  ```
* Please don't use jQuery or jQuery based plugins since there are many pure Vue alternatives
* Write unit tests for your custom components. See fgInput.spec and paper-table.spec

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
