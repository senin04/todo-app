<template>
    <div v-if="!todo.deleted " class="flex">
        <div>{{ todo.title }}</div>
        <button @click="deleteToDo">Delete</button>
    </div>
</template>
<script>
export default {
    name: "ToDo",
    props: ["todo"],
    methods: {
        deleteToDo() {
            this.todo.deleted = true;
            this.$emit("delete-todo", this.todo.id);
        },
    },
};
</script>
<style>
.flex {
    display: flex;
    justify-content: space-between;
}
</style>
