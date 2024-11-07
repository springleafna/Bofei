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
            <div class="top-background">
                <img src="D:\WebFrontEnd\vue3\Bofei\Bofei\src\components\icons\class-cover.png" alt="" class="image" />
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

/* 毛玻璃背景效果 */
.top-background {
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.image {
    width: 100%;
    filter: blur(5px);
}
.image::after {
    content: "";
    display: block;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

</style>
