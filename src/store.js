import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        todoEntries: [],
        loading: true,
    },

    mutations: {
        SET_TO_DOS(state, toDos) {
            state.todoEntries = toDos;
        },
        ADD_TO_DO(state, todo) {
            state.todoEntries.push(todo);
        },
        DELETE_TO_DO(state, id) {
            console.log(id);
            let index = state.todoEntries.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                state.todoEntries[index].completed = true;
            }
        },
        SET_LOADING(state, value) {
            state.loading = value;
        },
        RESTORE_TO_DO(state, id) {
            let index = state.todoEntries.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                state.todoEntries[index].completed = false;
            }
        },
        CHANGE_NAME_TO_DO(state, newTodo) {
            let index = state.todoEntries.findIndex(
                (todo) => todo.id === newTodo.id
            );
            if (index !== -1) {
                state.todoEntries[index].title = newTodo.title;
            }
        },
    },
    actions: {
        getData({ commit }) {
            axios
                .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
                .then((response) => {
                    commit("SET_TO_DOS", response.data);
                })
                .catch((error) => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => {
                    commit("SET_LOADING", false);
                });
        },
        addToDo({ commit }, todo) {
            axios
                .post("https://jsonplaceholder.typicode.com/todos?_limit=4", {
                    userId: todo.userId,
                    id: todo.id,
                    title: todo.title,
                    completed: todo.completed,
                })
                // .post(
                //     `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
                //     JSON.stringify({
                //         userId: todo.userId,
                //         id: todo.id,
                //         title: todo.title,
                //         completed: todo.completed,
                //     })
                // )
                .then((response) => {
                    commit("ADD_TO_DO", response.data);
                })
                .catch((err) => console.error(err));
        },
        deleteToDo({ commit }, id) {
            axios
                .delete(`https://jsonplaceholder.typicode.com/todos/ + ${id}`)
                .then(() => commit("DELETE_TO_DO", id))

                .catch((err) => console.error(err));
        },
        restoreToDo({ commit }, todo) {
            axios
                .put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
                    completed: false,
                })
                .then(() => commit("RESTORE_TO_DO", todo.id))
                .catch((err) => console.error(err));
        },
        changeNameToDo({ commit }, todo) {
            axios
                .put(`https://jsonplaceholder.typicode.com/todos/1`, {
                    title: todo.title,
                })
                .then(() => commit("CHANGE_NAME_TO_DO", todo))
                .catch((err) => console.error(err));
        },
    },
    getters: {
        activeToDos(state) {
            return state.todoEntries.filter((todo) => !todo.completed);
        },
        deletedToDos(state) {
            return state.todoEntries.filter((todo) => todo.completed);
        },
        getToDoById: (state) => (id) => {
            return state.todoEntries.find((todo) => todo.id === id);
        },
        numberOfActiveToDos(state) {
            return state.todoEntries.filter((todo) => !todo.completed).length;
        },
        getToDos(state) {
            return state.todoEntries;
        },
        getLoadingState(state) {
            return state.loading;
        },
    },
});

export default store;
