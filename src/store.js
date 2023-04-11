import { createStore } from "vuex";
import axios from "axios";


const store = createStore({
    state: {
        todoEntries: [],
    },

    mutations: {
      SET_TO_DOS(state, toDos){
        state.todoEntries = toDos
      }
    },
    actions: {
        async getData({ commit }) {
           await axios
                .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
                .then((response) => {
                  console.log(response)
                  commit(SET_TO_DOS, response.data)
                })
                // .catch((error) => {
                //     console.log(error);
                //     this.errored = true;
                // })
                // .finally(() => (this.loading = false));
        },
    },
    getters: {
      activeToDos(state) {
        return state.todoEntries.filter(todo => !todo.completed)
      }
    }
});

export default store;
