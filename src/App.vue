<template>
    <div id="app">
        <ToDos
            v-bind:todoEntries="todoEntries"
            @delete-todo="handleDeleteToDo"
        />
        <AddToDo @addToDo="addToDo" v-bind:todoEntries="todoEntries" />
    </div>
</template>

<script>
import ToDos from "./components/ToDos.vue";
import AddToDo from "./components/AddToDo.vue";

export default {
    name: "App",
    components: { ToDos, AddToDo },
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
            ],
        };
    },
};
</script>

<style>
#app {
    margin: 0 auto;
    display: flex;
    height: 100vh;
    margin-top: 100px;
    align-items: baseline;
}
</style>
