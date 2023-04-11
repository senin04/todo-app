<template>
    <div id="app">
        <LoadingScreen v-if="loading === true" />
        <div v-else>
            <RouterLink class="link" to="/">ToDos</RouterLink>
            <RouterLink class="link" to="/Deleted">Deleted ToDos</RouterLink>

            <RouterView />
            <!-- v-bind="{ todoEntries: todoEntries }"
                @add-to-do="addToDo"
                @deleteTodo="handleDeleteToDo" -->
        </div>
    </div>
</template>

<script>
import ToDos from "./views/ToDos.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import LoadingScreen from "./views/LoadingScreen.vue";

import { mapActions } from "vuex";
import store from "./store";

export default {
    name: "App",
    components: { ToDos, LoadingScreen },

    data() {
        return {
            loading: false,
    //         // erorred: false,
    //         // todoEntries: [],
        };
    },
    methods: {
        ...mapActions(["getData"]),
    }
    //     addToDo(newToDo) {
    //         if (newToDo.title) {
    //             this.todoEntries.push(newToDo);
    //             this.postData(newToDo);
    //         }
    //     },
    //     handleDeleteToDo(id) {
    //         axios
    //             .delete(`https://jsonplaceholder.typicode.com/todos/ + ${id}`)
    //             .then((response) =>
    //                 console.log("Status " + response.status + " Post removed")
    //             )
    //             .then(() => {
    //                 let index = this.todoEntries.findIndex(
    //                     (todo) => todo.id === id
    //                 );
    //                 if (index !== -1) {
    //                     this.todoEntries[index].completed = true;
    //                 }
    //             });
    //     },
    //     getData() {
    //         axios
    //             .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
    //             .then((response) => {
    //                 this.todoEntries = response.data;
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 this.errored = true;
    //             })
    //             .finally(() => (this.loading = false));
    //     },
    //     postData(todo) {
    //         axios
    //             .post("https://jsonplaceholder.typicode.com/todos?_limit=4", {
    //                 title: todo.title,
    //                 id: todo.id,
    //                 completed: todo.completed,
    //                 userId: todo.userId,
    //             })
    //             .then((response) => {
    //                 console.log("Status " + response.status + " Post created");
    //             })
    //             .catch((err) => console.error(err));
    //     },
    // },
    // mounted() {

        // this.getData();
    // },
};
</script>

<style>
#app {
    margin: 0 auto;
    width: 500px;
    margin-top: 100px;
}
.link {
    margin-bottom: 80px;
    margin-right: 40px;
    text-decoration: none;
    background-color: #ffa559;
    padding: 10px 12px;
    color: black;
    border-radius: 5px;
}

.router-link-active {
    background-color: #ff6000;
}
</style>
