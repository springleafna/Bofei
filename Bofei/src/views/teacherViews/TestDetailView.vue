<script setup>
import Navigation from '@/components/navigation.vue';
import Footer from '@/components/footer.vue';
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header>
            <Navigation></Navigation>
        </el-header>

        <el-main class="main">
            <div class="main-container">
                <div class="top">
                    <div class="top-left">

                    </div>
                    <div class="top-right">
                        <span>数据结构课后测试</span>

                    </div>
                </div>
                <div class="bottom">

                </div>
            </div>
        </el-main>

        <el-footer>
            <Footer></Footer>
        </el-footer>
      </el-container>
    </div>
</template>

<style scoped>
.common-layout {
    margin: 0px -20px auto;
}
.main {
    background-color: #f3f6fa;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-container {
    width: 95%;
}
.top {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    background-color: #fff;
    padding: 20px;
}
.bottom {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: #fff;
    margin-top: 30px;
    padding: 20px;
}
</style>
