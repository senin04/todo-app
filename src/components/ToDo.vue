<template>
    <div class="container">
        <div>{{ todo.title }}</div>
        <div class="flex">
            <router-link class="link" :to="`/ToDos/${todo.id}`">
                <button v-if="!todo.completed">Change</button>
            </router-link>
            <button v-if="!todo.completed" @click="deleteToDo">Delete</button>
            <button v-if="todo.completed" @click="restoreToDo">Restore</button>
        </div>
    </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
    name: "ToDo",
    props: ["todo"],
    methods: {
        deleteToDo() {
            this.$store.dispatch("deleteToDo", this.todo.id);
        },
        restoreToDo() {
            this.$store.dispatch("restoreToDo", this.todo);
        },
    },
    components: { RouterLink },
};
</script>
<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 280px;
}
button {
    background-color: #ffe6c7;
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s;
    margin-left: 10px;
}
button:hover {
    background-color: #ff6000;
}
.link {
    text-decoration: none;
    color: black;
    transition: 0.25s;
    border-radius: 10px;
}

.flex {
    display: flex;
}

.link button {
    margin-left: 0;
}

.link:hover {
    background-color: #ff6000;
}
</style>
