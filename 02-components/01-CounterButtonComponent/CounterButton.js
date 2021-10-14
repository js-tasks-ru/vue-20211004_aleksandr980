import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    }
  },
  emits: ['count'],
  methods: {
    updateCount() {
      this.$emit('update:count', this.count + 1);
    }
  },

  // Компонент должен иметь входной параметр
  // Шаблон лучше держать максимально простым, а логику выносить в методы
  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="updateCount()">{{ count }}</button>`,
});
