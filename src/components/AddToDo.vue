<template>
    <form @submit.prevent="addToDo">
        <input placeholder="New to-do" type="text" v-model="userInput" />
        <button>Add to list</button>
    </form>
</template>
<script>
export default {
    name: "AddToDo",
    props: ["todoEntries"],
    data() {
        return {
            userInput: "",
        };
    },
    methods: {
        addToDo() {
            let newToDo = {
                id: this.todoEntries.length + 1,
                title: this.userInput,
                deleted: false,
            };
            this.$emit("addToDo", newToDo);
            this.userInput = "";
        },
    },
};
</script>
<style scoped>
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
;
