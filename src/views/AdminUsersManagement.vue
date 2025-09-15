<template>
  <div class="admin-container">
    <h2>Admin - Manage Users</h2>

    <table class="users-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <select v-model="user.role" @change="updateRole(user.id, user.role)">
              <option value="CUSTOMER">CUSTOMER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </td>
          <td>
            <button class="delete-btn" @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="users.length === 0" class="no-users">No users available.</p>
  </div>
</template>

<script>
import auth from '../stores/auth.js';
import axios from 'axios';

export default {
  name: "AdminUsers",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:8080/admin/users");
        this.users = response.data;
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    },
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:8080/admin/users/${id}`);
        this.users = this.users.filter(u => u.id !== id);
      } catch (err) {
        console.error("Failed to delete user:", err);
      }
    },
    async updateRole(id, role) {
      try {
        await axios.put(`http://localhost:8080/admin/users/${id}/role?role=${role}`);
        alert(`Role updated to ${role}`);
      } catch (err) {
        console.error("Failed to update role:", err);
      }
    },
    checkAdmin() {
      const user = auth.getCurrentUser();
      if (!user || user.role !== "ADMIN") {
        this.$router.push("/login"); 
      } else {
        this.fetchUsers(); 
      }
    },
  },
  mounted() {
    this.checkAdmin();
  },
};
</script>

<style scoped>
.admin-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
.users-table {
  width: 100%;
  border-collapse: collapse;
}
.users-table th, .users-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
.users-table th {
  background-color: #2f80ed;
  color: white;
}
select {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.delete-btn {
  padding: 6px 10px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.delete-btn:hover {
  background-color: #d9363e;
}
.no-users {
  text-align: center;
  margin-top: 20px;
  font-style: italic;
  color: #666;
}
</style>
