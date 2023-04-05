<template>
    <div class="container">
        <div>{{ todo.title }}</div>
        <button v-if="!todo.deleted" @click="deleteToDo">Delete</button>
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
<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 200px;
}
button {
    background-color: #ffe6c7;
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s;
}
button:hover {
    background-color: #ff6000;
}
</style>
