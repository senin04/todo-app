import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { createRouter, createWebHashHistory } from "vue-router";
import DeletedToDos from "./views/DeletedToDos.vue";
import ToDos from "./views/ToDos.vue";
import PageNotFound from "./views/PageNotFound.vue";
import store from "./store";
import Details from "./views/Details.vue";

const routes = [
    { path: "/", component: ToDos },
    { path: "/ToDos/:id", name: "todo", component: Details },
    { path: "/Deleted", component: DeletedToDos },
    { path: "/:catchAll(.*)", component: PageNotFound },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
