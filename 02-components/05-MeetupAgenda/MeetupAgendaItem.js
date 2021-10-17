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
  methods: {
    title(agentaItem) {
      if (agentaItem.title) {
        return agentaItem.title
      }

      return agendaItemDefaultTitles[agentaItem.type];
    },
    icon(agentaItem) {
      return agendaItemIcons[agentaItem.type];
    },
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="'/src/assets/icons/icon-' + icon(agendaItem) + '.svg'" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">
        {{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}
      </div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">
          {{ title(agendaItem) }}
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
