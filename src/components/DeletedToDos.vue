<template>
    <div>
        <h1>Deleted ToDos</h1>
        <ul>
            <li v-bind:key="item.id" v-for="todo in deletedToDos">
                <ToDo v-bind:todo="item" />
            </li>
            >
        </ul>
    </div>
</template>

<script>
export default {
    name:"DeletedToDos",
    props: ["todoEntries"],
    computed: {
        deletedToDos() {
            return this.todoEntries.filter((todo) => todo.deleted === true);
        }
    }
};
</script>

<style lang="scss" scoped></style>
