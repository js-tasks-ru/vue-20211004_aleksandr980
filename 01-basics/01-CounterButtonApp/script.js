import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  el: '#app',
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countInc: () => {
      this.count++;
    }
  }
});

const app = createApp(Root);
const vm = app.mount('#app');
