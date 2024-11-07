<script setup>
import { reactive, ref } from 'vue';

const messageList = reactive([]);
const newMessage = ref('');

function addMessage(message) {
    if (message) {
        messageList.push(message);
        newMessage.value = ''; // 清空输入框
    }
}

function deleteMessage(index) {
    messageList.splice(index, 1);
}
</script>

<template>
<div class="container">
    <h1>简易留言板</h1>
    <div class="messageBox">
        <ul class="messageList">
            <li v-for="(message, index) in messageList" :key="index">
                <span>{{ message }}</span>
                <button class="btn" @click="deleteMessage(index)">删除</button>
            </li>
        </ul>
    </div>
    <div class="inputBox">
        <input v-model="newMessage" type="text" class="input" placeholder="请输入留言">
        <button @click="addMessage(newMessage)" class="btn">留言</button>
    </div>
</div>   
</template>

<style scoped>
.container {
    margin: 80px auto;
    width: 400px;
    border: 2px solid #7CFC00;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background: #f9f9f9;
    padding: 20px;
    text-align: center;
}
h1 {
    color: #32CD32;
    font-family: 'Arial', sans-serif;
    font-size: 24px;
}
.messageBox {
    height: 300px;
    overflow-y: auto;
    text-align: left;
    margin-bottom: 20px;
}
ul {
    list-style: none;
    padding: 0;
}
ul li {
    line-height: 40px;
    padding: 10px;
    border-bottom: 1px solid #dcdcdc;
}
ul li:last-child {
    border-bottom: none;
}
ul li span {
    color: #333;
    display: inline-block;
    width: 260px;  
}
.btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.btn:hover {
    background-color: #45a049;
}
.inputBox {
    display: flex;
    justify-content: space-between;
}
.input {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    outline: none;
}
.input:focus {
    border-color: #4CAF50;
}
</style>
