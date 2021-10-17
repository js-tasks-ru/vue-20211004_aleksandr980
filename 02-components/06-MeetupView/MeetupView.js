import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from './../02-MeetupDescription/MeetupDescription.js';
import MeetupCover from './../03-MeetupCover/MeetupCover.js';
import MeetupInfo from './../04-MeetupInfo/MeetupInfo.js';
import MeetupAgenda from './../05-MeetupAgenda/MeetupAgenda.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <meetup-cover :title="meetup.title" :image="meetup.image"></meetup-cover>

      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <meetup-description :description="meetup.description"></meetup-description>

            <h3>Программа</h3>

            <meetup-agenda
              v-if="meetup.agenda.length"
              :agenda="meetup.agenda"
            ></meetup-agenda>
            <ui-alert v-else ></ui-alert>
          </div>
          <div class="meetup__aside">
            <meetup-info
              :date="meetup.date"
              :place="meetup.place"
              :organizer="meetup.organizer"
            ></meetup-info>
          </div>
        </div>
      </ui-container>
    </div>`,
});
