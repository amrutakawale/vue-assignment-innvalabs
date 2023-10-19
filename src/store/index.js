import { createStore } from 'vuex'

const store = createStore({
  state: {
    users: [],
    filteredUsers: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setFilteredUsers(state, filteredUsers) {
      state.filteredUsers = filteredUsers;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      // Fetch users from the JSONPlaceholder API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      commit("setUsers", users);
      commit("setFilteredUsers", users);
    },
    filterUsers({ commit, state }, filter) {
      // Filter users based on the search and filter criteria
      const filteredUsers = state.users.filter((user) => {
        return (
          user.name?.toLowerCase().includes(filter.name?.toLowerCase()) ||
          user.email?.toLowerCase().includes(filter.email?.toLowerCase())
          // Add other filter criteria here
        );
      });
      commit("setFilteredUsers", filteredUsers);
    },
  },
  getters: {
    getUsers: (state) => state.filteredUsers,
  },
});


export default store;
