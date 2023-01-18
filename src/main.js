import { createApp } from 'vue'

import App from './App.vue'

import '@/assets/scss/main.scss'

import routers from './routes'

import {store} from './store/index'

import 'boxicons'

const app = createApp(App);

app.use(routers);
app.use(store);

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});

app.mount('#app')
