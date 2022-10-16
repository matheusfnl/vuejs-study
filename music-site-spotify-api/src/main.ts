import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far);

createApp(App)
  .use(
    store,
    VueAxios,
    axios,
  )
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
