<template>
    <div id="container-list">
        <h1>Basic To-Do-List</h1>
        <ul>
            <li :key="item.id" v-for="item in activeToDos">
                <ToDo :todo="item" @delete-todo="deleteTodo" />
            </li>
        </ul>
        <AddToDo @addToDo="addToDo" :todoEntries="todoEntries" />
    </div>
</template>
<script>
import ToDo from "../components/ToDo.vue";
import AddToDo from "../components/AddToDo.vue";

export default {
    name: "ToDos",
    components: { ToDo, AddToDo },
    props: ["todoEntries"],
    computed: {
        activeToDos() {
            return this.todoEntries.filter((todo) => todo.deleted === false);
        },
    },
    methods: {
        deleteTodo(id) {
            this.$emit("delete-todo", id);
        },
        addToDo(newToDo) {
            this.$emit("addToDo", newToDo);
            console.log(newToDo);
        },
    },
};
</script>

<style scoped>
#container-list {
    background-color: #ffa559;
    padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
}

li {
    margin-bottom: 10px;
    font-size: 20px;
    overflow: hidden;
}
</style>
