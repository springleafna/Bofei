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
                <div class="content-top">
                    <div class="content-top-left">
                        <h4 style="color: rgb(63, 113, 200);">我的课程</h4>
                        <div style="display: block;"><button>+创建课程</button></div>
                    </div>

                    <div class="content-top-right">
                        <h4 style="color: rgb(63, 113, 200);">个人信息</h4>

                    </div>
                </div>

                <div class="content-bottom">
                    <div class="class-name">
                        <h4 style="color: rgb(63, 113, 200);">我的教学班级</h4>
                        <div style="display: block;"><button>+创建教学班级</button></div>
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
}
/**全局属性的设置*/
button{
    padding: 5px 10px;
    background: rgb(45, 139, 221);
    /**盒子模型-18页**/
    border: none;
    font-size: 14px;
    color: aliceblue;
    border-radius: 5px;
}

/**内容设置**/
.content-top, .content-bottom{
    width: 1200px;
    height: 550px;
    margin: 0 auto;
    border-radius: 8px;
}

.content-top>div{
    display: inline-block;
    background-color:#fff;
    /* border: 1px solid black; */
    height: 100%;
    vertical-align: top;
}
.content-top .content-top-left{
    width: 65%;
    /**盒子模型-51页*/
    padding: 5px;
    border-radius: 8px;
}
.content-top .content-top-left div{
    display: inline-block;
}

.content-top .content-top-right{
    width: 30%;
    height: 70%;
    border-radius: 8px;
    margin-left: 20px;
}
.content-top-left ul{
    list-style: none;
}
.content-top-left ul li{
    margin-left: -15px;
}
.content-top .content-course img{
    width: 220px;
}
.content-top .course-time{
    color: dimgrey;
}

.content-bottom{
    background: #fff;
    padding: 5px;
    margin: 30px auto;
}

/**教学班级设置*/
.content-bottom ul{
    list-style: none;
}
.content-bottom ul li{
    display: inline-block;
    vertical-align: middle;
}
.content-bottom ul li img{
    width: 200px;
}

.content-bottom ul li span{
    display: block;
}

.content-bottom .class-li-one{
    width: 250px;
}

.content-bottom .class-li-two{
    width: 500px;
}

.content-bottom .class-li-three{
    width: 350px;
}
</style>
