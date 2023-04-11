<template>
    <div id="container-list">
        <h1>To-Do-List</h1>
        <ul>
            <li :key="item.id" v-for="item in activeToDos">
                <ToDo :todo="item" />
            </li>
        </ul>
        <AddToDo />
    </div>
</template>
<script>
import ToDo from "../components/ToDo.vue";
import AddToDo from "../components/AddToDo.vue";

export default {
    name: "ToDos",
    components: { ToDo, AddToDo },
    computed: {
        activeToDos() {
            return this.$store.getters.activeToDos;
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
