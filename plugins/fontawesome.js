import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faEnvelope, faTerminal } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faEnvelope, faTerminal)

Vue.component('font-awesome-icon', FontAwesomeIcon)
