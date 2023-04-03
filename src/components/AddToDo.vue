<template>
    <form @submit="addToDo">
        <input type="text" v-model="userInput" />
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
        addToDo(event) {
            event.preventDefault();
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
button {
    margin-left: 2px;
}
</style>
;
