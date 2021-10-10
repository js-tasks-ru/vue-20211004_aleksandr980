import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  el: '#app',
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
});

const app = createApp(Root);
const vm = app.mount('#app');
