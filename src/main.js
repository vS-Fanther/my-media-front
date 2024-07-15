import {createApp} from 'vue'
import App from "@/App.vue";
import components from "@/components/UI"
import router from "@/components/router/router";
import '@fortawesome/fontawesome-free/css/all.css';


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

app
    .use(router)
    .mount('#app')
