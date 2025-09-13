<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label>Username</label>
        <input v-model="username" type="text" placeholder="Enter username" required />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" placeholder="Enter email" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Enter password" required />
      </div>

      <div class="form-group">
        <label>Role</label>
        <select v-model="role" required>
          <option value="">Select role</option>
          <option value="CUSTOMER">Customer</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? "Registering..." : "Register" }}
      </button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>

    <p class="login-link">
      Already have an account?
      <router-link to="/login">Login here</router-link>
    </p>
  </div>
</template>

<script>
import auth from '../stores/auth.js'

export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      role: "",
      loading: false,
      error: null,
    }
  },
  methods: {
    async handleRegister() {
      this.error = null;
      this.loading = true;
      try {
      
        await auth.register(this.username, this.email, this.password, this.role);

        this.$router.push("/login");
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}
h2 { text-align: center; margin-bottom: 20px; }
.form-group { margin-bottom: 15px; display: flex; flex-direction: column; }
label { margin-bottom: 5px; font-weight: bold; }
input, select { padding: 8px; border-radius: 5px; border: 1px solid #ccc; }
button {
  width: 100%;
  padding: 10px;
  background-color: #2f80ed;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:disabled { background-color: #7aaefc; cursor: not-allowed; }
.error { color: red; margin-top: 10px; text-align: center; }
.login-link { text-align: center; margin-top: 15px; }
</style>
