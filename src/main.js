import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import  { createRouter, createWebHistory} from 'vue-router'
import DeletedToDos from "./views/DeletedToDos.vue"
import ToDos from "./views/ToDos.vue"


const routes = [
    {path: '/', component: ToDos, props: {
        todoEntries: []
    }},
    {path: '/Deleted', component: DeletedToDos, props: {
        todoEntries: []
    }}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')

