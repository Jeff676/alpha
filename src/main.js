import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//VUE ROUTER
import router from './router'

// PRIMEVUE
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import Tooltip from 'primevue/tooltip';

// FONTAWESOME
// LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core'
// FONTAWESOME COMPONENT
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// IMPORT ICONS
import { faClipboardUser, faChartPie, faUserNurse, faUsers, faUserDoctor, faUserInjured, faPeopleGroup, faArrowRotateRight, faFire, faTruckFast, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faHospital, faKeyboard, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// ADD ICONS TO LIBRARY
library.add( faClipboardUser, faChartPie, faUserNurse, faUsers, faUserDoctor, faUserInjured, faArrowRotateRight, faUser, faKeyboard, faTwitter, faFacebook, faInstagram, faWhatsapp, faPeopleGroup, faHospital, faFire, faTruckFast, faMobileScreen, faEnvelope)

// PRIMEFLEX
import 'primeflex/primeflex.css'
import 'primeflex/themes/saga-blue.css'


createApp(App)
    .use(PrimeVue)
    .use(router)
    .directive('tooltip', Tooltip)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
