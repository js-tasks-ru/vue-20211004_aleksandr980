import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      required: true
    }
  },
  methods: {
    addZero: (num) => {
      let result = num;
      if (num >= 0 && num <= 9) {
        result = '0' + num;
      }

      return result;
    }
  },
  computed: {
    datetime() {
      let dateObject = new Date(this.date);
      return dateObject.getFullYear() + '-'
        + this.addZero(dateObject.getMonth() + 1)
        + '-'
        + this.addZero(dateObject.getUTCDate());
    },
    dateString() {
      let dateObject = new Date(this.date);
      // , month: "short", day: "numeric" }
      return dateObject.toLocaleDateString('en', {month: "short"})
        + ' '
        + dateObject.getUTCDate()
        + ', '
        + dateObject.toLocaleDateString('en', {year: "numeric"});
    }
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ date }}
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="datetime">
          {{ dateString }}
        </time>
      </li>
    </ul>`,
});
