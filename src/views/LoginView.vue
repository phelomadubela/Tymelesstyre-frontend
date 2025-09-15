<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Enter your username"
          required
        />
      </div>

      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? "Logging in..." : "Login" }}
      </button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>

   
    <p class="register-link">
      Don't have an account? 
      <router-link to="/register">Register here</router-link>
    </p>
  </div>
</template>

<script>
import auth from '../stores/auth.js';

export default {
  name: "LoginView",
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      this.error = null;
      this.loading = true;

      try {
        const user = await auth.login(this.username, this.password);
        this.$router.push(user.redirectPath);
      } catch (err) {
        this.error = err.message || "Login failed. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.login-container h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
.login-container form div {
  margin-bottom: 15px;
}
.login-container label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #444;
}
.login-container input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  transition: border 0.2s;
}
.login-container input:focus {
  border-color: #007bff;
  outline: none;
}
.login-container button {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}
.login-container button:hover:not(:disabled) {
  background-color: #0056b3;
}
.login-container button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}

.register-link {
  text-align: center;
  margin-top: 12px;
  font-size: 0.9rem;
  color: #555;
}
.register-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  margin-left: 4px;
}
.register-link a:hover {
  text-decoration: underline;
}
</style>
