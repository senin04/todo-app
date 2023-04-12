<template>
    <div id="app">
        <LoadingScreen v-if="loading === true" />
        <div v-else>
            <RouterLink class="link" to="/">ToDos</RouterLink>
            <RouterLink class="link" to="/Deleted">Deleted ToDos</RouterLink>
            <RouterView />
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import LoadingScreen from "./views/LoadingScreen.vue";

export default {
    name: "App",
    components: {  LoadingScreen },
    computed: {
        loading() {
            return this.$store.state.loading;
        },
    },
    methods: {
        getData() {
            this.$store.dispatch("getData");
        },
    },
    mounted() {
        this.getData();
    },
    
};
</script>

<style scoped>
#app {
    margin: 0 auto;
    width: 500px;
    margin-top: 100px;
}
.link {
    margin-bottom: 80px;
    margin-right: 40px;
    text-decoration: none;
    background-color: #ffa559;
    padding: 10px 12px;
    color: black;
    border-radius: 5px;
}

.router-link-active {
    background-color: #ff6000;
}
</style>
