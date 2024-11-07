<script setup>
import { ref } from 'vue'
const username = ref('')
const password = ref('')
const remember = ref(false)

</script>

<template>
    <div class="container">
        <div class="left">
            <img src="D:\WebFrontEnd\vue3\Bofei\Bofei\src\components\icons\loginBac.png" alt="background" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="right">
            <div class="login-container">
                <div class="login-card">
                    <h1>登录博飞</h1>
                    <form>
                        <div class="input-group">
                            <el-text class="mx-1" size="small">&nbsp;&nbsp;用户名</el-text>
                            <input type="username" id="username" v-model="username" required />
                        </div>
                        <div class="input-group">
                            <el-text class="mx-1" size="small">&nbsp;&nbsp;密码</el-text>
                            <input type="password" id="password" v-model="password" required />
                        </div>
                        <div class="optional-group">
                            <div class="remember">
                                <el-checkbox v-model="remember" label="记住我" size="large" />
                            </div>
                        </div>
                        <button type="submit" class="login-button">登录</button>
                    </form>
                    <p class="footer">
                        没有账户? <a href="#">注册</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.left {
    width: 50%;
    height: 100%;
    background-color: #1f95ff;
}

.right {
    width: 50%;
    height: 100%;
    background-color: #fff;
}


.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
}

.login-card {
  background: #fff;
  padding: 30px;
  width: 300px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

input[type="username"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.optional-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.optional-group input {
  margin-right: 5px;
}

.login-button {
  width: 50%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.footer {
  margin-top: 20px;
  font-size: 14px;
}

.footer a {
  color: #007bff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>