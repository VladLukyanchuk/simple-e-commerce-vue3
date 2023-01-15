import { createApp } from 'vue'

import App from './App.vue'

import '@/assets/scss/main.scss'

import routers from './routes'

import {store} from './store/index'

import 'boxicons'

const app = createApp(App);

app.use(routers);
app.use(store)

app.mount('#app')
