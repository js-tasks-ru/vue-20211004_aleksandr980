import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',
  components: {
    VMeetupAgendaItem: MeetupAgendaItem
  },
  props: {
    agenda: {
      type: Array,
      reqiired: true
    }
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item" v-for="(agendaItem, index) in agenda">
        <v-meetup-agenda-item :agendaItem="agendaItem"></v-meetup-agenda-item>
      </li>
    </ul>`,
});
