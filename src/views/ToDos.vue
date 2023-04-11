<template>
    <div id="container-list">
        <h1>Basic To-Do-List</h1>
        <div>{{todoEntries}}</div>
        <ul>
            <li :key="item.id" v-for="item in todoEntries">
                <ToDo :todo="item" @delete-todo="deleteTodo" />
            </li>
        </ul>
        <!-- <AddToDo @addToDo="addToDo" :todoEntries="todoEntries" /> -->
    </div>
</template>
<script>
import ToDo from "../components/ToDo.vue";
import AddToDo from "../components/AddToDo.vue";
import { mapActions } from "vuex";
// import store from "../store";

export default {
    name: "ToDos",
    components: { ToDo, AddToDo },
    // props: ["todoEntries"],


    computed: {
        // activeToDos() {
        //     const todos = this.$store.getters.activeToDos;
        //     console.log("Active to-dos:", todos);
        //     return todos;
        // },
        todoEntries() {
            return this.$store.state.todoEntries;
        },
    },
    methods: {
        ...mapActions(["getData"]),
        // getData() {
        //     this.$store.dispatch('getData')
        // },
          created() {
             this.getData()
        }


        // deleteTodo(id) {
        //     this.$emit("delete-todo", id);
        // },
        // addToDo(newToDo) {
        //     this.$emit("addToDo", newToDo);
        // },
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
