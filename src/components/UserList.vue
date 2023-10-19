// src/components/UserList.vue
<template>
  <div>
    <input
      type="text"
      v-model="search"
      placeholder="Search by name or email"
      @input="filterUsers"
    />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in paginatedUsers" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.username }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === pageCount">
        Next
      </button>
    </div>
  </div>
  
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.users.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.users.length / this.itemsPerPage);
    },
  },
  data() {
    return {
      search: "",
      currentPage: 1,
      itemsPerPage: 5,

    };
  },
  methods: {
    filterUsers() {
      this.$store.dispatch("filterUsers", {
        name: this.search,
        email: this.email,
      });
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.pagination {
  text-align: center;
  margin-top: 10px;
}

.pagination button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
