import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    }
  },

  template: `
    <div
      class="meetup-cover"
      v-bind:style="[image ? {'--bg-url': 'url(' + image + ')'} : {'--bg-url': 'url(https://course-vue.javascript.ru/api/images/2)'}]"
    >
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
