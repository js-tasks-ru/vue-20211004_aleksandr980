import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Array,
      reqiired: true
    }
  },
  computed: {
    title() {
      if (this.agendaItem.title) {
        return this.agendaItem.title;
      }

      return agendaItemDefaultTitles[this.agendaItem.type];
    },
    icon() {
      return agendaItemIcons[this.agendaItem.type];
    },
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="'/src/assets/icons/icon-' + icon + '.svg'" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">
        {{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}
      </div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">
          {{ title }}
        </h3>
        <template v-if="agendaItem.type === 'talk'">
          <p class="agenda-item__talk">
            <span>{{ agendaItem.speaker }}</span>
            <span class="agenda-item__dot"></span>
            <span class="agenda-item__lang">
              {{ agendaItem.language }}
            </span>
          </p>

          <p v-if="agendaItem.description">
            {{ agendaItem.description }}
          </p>
        </template>
      </div>
    </div>`,
});
