<script setup>
import { UserFilled, Message } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
/* 路由跳转 返回首页 */
const goToHome = () => {
    router.push('/teaHome')
}
</script>

<template>
<div class="head">
    <div class="top">
        <img src="@/assets/images/bosiLogo.png" alt="bosiLogo" @click="goToHome" />
        <ul class="menu">
            <li>工作台</li>
            <li>教学资源</li>
            <li>博飞课程</li>
            <li>报表中心</li>
            <li>直播</li>
            <li>社区</li>
            <li>商城</li>
        </ul>
    </div>
    <div class="head-right">
        <!-- 消息 -->
        <el-badge :value="155" :max="99" class="item">
            <el-icon color="#fff" size="20px" style="cursor: pointer;"><Message /></el-icon>
        </el-badge>
        <!-- 头像 -->
        <el-dropdown placement="bottom">
            <el-avatar :icon="UserFilled" style="cursor: pointer;" />
            <template #dropdown>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>成长档案</el-dropdown-item>
                    <el-dropdown-item plain @click="goToLogin">退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>    
    </div>
</div>
</template>

<style scoped>
.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #023981;
    height: 60px;
    width: 100%;
    padding: 0;
}
.top {
    display: flex;
    align-items: center;
}
.top img {
    margin-left: 80px;
    height: 60px;
}
.top img:hover {
    cursor: pointer;
}
.menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    color: #bbc5d5;
    margin-left: 60px;
}
.menu li {
    margin-right: 40px;
}
.menu li:hover {
    color: #ffffff;
    cursor: pointer;
}
.head-right {
    display: flex;
    align-items: center;
    margin-right: 50px;
}
.item {
    margin-right: 40px;
    margin-top: 10px;
}
</style>
