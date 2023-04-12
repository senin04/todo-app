<template>
    <div id="container-list">
        <h1>To-Do-List</h1>
        <form @submit.prevent="changeNameToDo">
            <input type="text" v-model="newTitle" :placeholder="todo.title" />
            <button>Save</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Details",
    data() {
        return {
            newTitle: "",
        };
    },
    computed: {
        todo() {
            return this.$store.getters.getToDoById(
                Number(this.$route.params.id)
            );
        },
    },

    methods: {
        changeNameToDo() {
            if (this.newTitle !== "") {
                const changedToDo = {
                    id: this.todo.id,
                    title: this.newTitle,
                };
                this.$store.dispatch("changeNameToDo", changedToDo);
                this.$router.push({ path: "/" });
            }
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

form {
    margin-left: 40px;
}

input {
    background-color: #ffe6c7;
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 10px;
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
</style>
