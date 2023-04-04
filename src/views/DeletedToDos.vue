<template>
    <div id="container-list">
        <h1>Deleted ToDos</h1>
        <ul>
            <li v-bind:key="item.id" v-for="item in deletedToDos">
                <ToDo v-bind:todo="item" />
            </li>
        </ul>
    </div>
</template>

<script>
import ToDo from "../components/ToDo.vue";
export default {
    name: "DeletedToDos",
    props: ["todoEntries"],
    components: { ToDo },
    computed: {
        deletedToDos() {
            return this.todoEntries.filter((todo) => todo.deleted === true);
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
