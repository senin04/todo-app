<template>
    <div id="app">
        <RouterLink class="link" to="/">ToDos</RouterLink>
        <RouterLink class="link" to="/Deleted">Deleted ToDos</RouterLink>

        <RouterView
            v-bind="{ todoEntries: todoEntries }"
            @add-to-do="addToDo"
        />
    </div>
</template>

<script>
import ToDos from "./views/ToDos.vue";
import { RouterLink } from "vue-router";

export default {
    name: "App",
    components: { ToDos },
    methods: {
        addToDo(newToDo) {
            if (newToDo.title) {
                this.todoEntries.push(newToDo);
            }
        },
        handleDeleteToDo(id) {
            let index = this.todoEntries.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                this.todoEntries[index].deleted = true;
            }
        },
    },
    data() {
        return {
            todoEntries: [
                { id: 1, title: "First todo", deleted: false },
                { id: 2, title: "Second todo", deleted: false },
                { id: 3, title: "Third todo", deleted: false },
                { id: 4, title: "Fourth todo", deleted: true },
            ],
        };
    },
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
