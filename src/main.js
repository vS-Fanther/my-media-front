import {createApp} from 'vue'
import App from "@/App.vue";
import components from "@/components/UI"
import router from "@/components/router/router";
import '@fortawesome/fontawesome-free/css/all.css';
import store from '@/store';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

app
    .use(store)
    .use(router)
    .mount('#app')
