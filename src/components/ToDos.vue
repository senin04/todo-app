<template>
    <div>
        <h1>Basic To-Do-List</h1>
        <ul>
            <li v-bind:key="item.id" v-for="item in activeToDos">
                <ToDo v-bind:todo="item" @delete-todo="deleteTodo" />
            </li>
        </ul>
    </div>
</template>
<script>
import ToDo from "./ToDo.vue";

export default {
    name: "ToDos",
    components: { ToDo },
    props: ["todoEntries"],
    computed: {
        activeToDos() {
            return this.todoEntries.filter((todo) => todo.deleted === false);
        },
    },
    methods: {
        deleteTodo(id) {
            this.$emit("delete-todo", id);
        }
    }
};
</script>

<style>
li {
    overflow: hidden;
}
</style>
