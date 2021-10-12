import {createApp, defineComponent} from "./vendor/vue.esm-browser.js";

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const Root = defineComponent({
  el: '#app',
  name: 'App',
  data() {
    return {
      selectedMeetup: '',
      meetupName: '',
    }
  },
  watch: {
    selectedMeetup: {
      handler(newValue, oldValue) {
        fetchMeetupById(newValue).then((data) => {
          this.meetupName = data.title;
        });
      },
    },
  },
});

const app = createApp(Root);
app.mount('#app');

