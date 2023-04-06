import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import  { createRouter, createWebHistory} from 'vue-router'
import DeletedToDos from "./views/DeletedToDos.vue"
import ToDos from "./views/ToDos.vue"
import PageNotFound from "./views/PageNotFound.vue"


const routes = [
    {path: '/', component: ToDos, props: {
        todoEntries: []
    }},
    {path: '/Deleted', component: DeletedToDos, props: {
        todoEntries: []
    }},
    { path: '/:catchAll(.*)', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')

