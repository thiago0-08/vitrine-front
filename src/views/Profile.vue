<template>
    <div class="login-container" style="margin-top: 100px; margin-bottom: 100px;">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="username">Usuário</label>
          <input type="text" id="username" placeholder="Entre com seu email" v-model="username">
        </div>
        <div class="input-group">
          <label for="password">Senha</label>
          <input type="password" id="password" placeholder="Informe sua senha" v-model="password">
        </div>
        <button type="submit" class="login-button">
          <i class="fas fa-sign-in-alt"></i> Login
        </button>
      </form>
      <div class="register-link">
        <p>Não tem conta? <a href="#">Registre-se</a></p>
      </div>
    </div>  
  </template>
  
  <script setup>
  import { ref } from 'vue'; 
  import { useRouter } from 'vue-router'; 
  
  const username = ref('');
  const password = ref('');
  
  const router = useRouter();
  
  const login = () => {
    
    console.log('Login realizado');
  
   
    router.push('/');
  }
  </script>
  

  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
  }
  
  .login-container {
    
    background-color: #fff;
    padding: 40px 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
    margin: auto; 
  }
  
  .login-container h2 {
    margin-bottom: 25px;
    color: #333;
    font-size: 28px;
  }
  
  .input-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 8px;
    color: #555;
    font-size: 16px;
  }
  
  .input-group input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .register-link {
    margin-top: 20px;
  }
  
  .register-link p {
    color: #555;
    font-size: 16px;
  }
  
  .register-link a {
    color: #007bff;
    text-decoration: none;
  }
  
  .register-link a:hover {
    text-decoration: underline;
  }
  
  button i {
    margin-right: 5px;
  }
  
  .register-link a {
    color: #007bff;
    text-decoration: underline;
    font-weight: bold;
    font-size: 18px;
  }
  
  .input-group input:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  
  @media (max-width: 600px) {
    .login-container {
      padding: 20px 15px;
    }
  
    .login-container h2 {
      font-size: 24px;
    }
  
    .input-group label {
      font-size: 14px;
    }
  
    .input-group input {
      padding: 10px;
      font-size: 14px;
    }
  
    button {
      padding: 10px;
      font-size: 16px;
    }
  
    .register-link p {
      font-size: 14px;
    }
  }
  </style>
  