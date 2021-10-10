import {defineComponent, createApp } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  el: '#app',
  name: 'App',
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      operation: 'sum'
    }
  },
  computed: {
    result() {
      let result = 0;
      let firstNumber = Number(this.firstNumber);
      let secondNumber = Number(this.secondNumber);

      switch (this.operation) {
        case 'sum':
          result = firstNumber + secondNumber;
          break;
        case 'subtract':
          result = firstNumber - secondNumber;
          break;
        case 'multiply':
          result = firstNumber * secondNumber;
          break;
        case 'divide':
          if (secondNumber === 0) {
            result = 'Нельзя делить на 0';
          } else {
            result = firstNumber / secondNumber;
          }
          break;
      }

      return result;
    }
  },
});

const app = createApp(Root);
const vm = app.mount('#app');
