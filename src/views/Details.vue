<template>
    <div id="container-list">
        <h1>To-Do-List</h1>
        <ul>
            <li>
                {{ }}
            </li>
        </ul>
        <!-- <AddToDo /> -->
    </div>
</template>

<script>
export default {
    name: "Details",
    computed: {
        todo() {
            const { id } = this.$route.params.id;
            return this.$store.getters.getToDoById(id);
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
