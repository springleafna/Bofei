<script setup>
import { ref, reactive } from 'vue';
import Navigation from '@/components/navigation.vue';
import Footer from '@/components/footer.vue';

const test = ref({
    testId: 1,
    title: '数据结构课后测试',
    description: '测试题目描述',
    amount: 10,
    creator: '谭浩强',
    createTime: '2024-11-07 15:00:00',
    endTime: '2024-11-7 17:00:00',
    status: '进行中'
})
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
                    <!-- 左侧测试题图标 -->
                    <div class="left-icon">
                        <img src="@/assets/images/test.png" alt="">
                    </div>

                    <!-- 右侧测试题信息 -->
                    <div class="right-message">
                        <h1 class="title">数据结构课后测试</h1>
                        <div class="info-row">
                            <p>发布人： <span class="value">{{ test.creator }}</span></p>
                            <p>发布时间： <span class="value">{{ test.createTime }}</span></p>
                            <p>截止时间： <span class="value">{{ test.endTime }}</span></p>
                            <label class="label-status">{{ test.status }}</label>
                        </div>
                        <p style="color: #a0a0a0;">题目数量： <span class="value">{{ test.amount }}</span></p>
                    </div>
                </div>

                <!-- 测试分析 -->
                <div class="bottom">
                    <div class=".analysis-container">
                        <h2 class="analysis-title">测试分析</h2>
                        <div class="card-container">
                            <div class="card">
                                <div class="icon" style="background-color: #fee5e5;">
                                <span class="icon-user">&#128100;</span>
                                </div>
                                <div class="content">
                                <h3>89% <small>(32/36)</small></h3>
                                <p>完成率</p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon" style="background-color: #e5f2fe;">
                                <span class="icon-chart">&#128202;</span>
                                </div>
                                <div class="content">
                                <h3>97%</h3>
                                <p>平均正确率</p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon" style="background-color: #fff9e5;">
                                    <span class="icon-time">&#9202;</span>
                                </div>
                                <div class="content">
                                    <h3>65分钟</h3>
                                    <p>平均用时</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="statistical-chart">
                        <img src="@/assets/images/chart.png" alt="">
                    </div>
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
    height: auto;
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
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: space-between; /* 左右分布 */
    align-items: center; /* 上下居中 */
}
.left-icon {
    width: 10%; /* 占据的宽度 */
    text-align: center; /* 文本居中 */
}
.right-message {
    width: 90%; /* 占据的宽度 */
    text-align: left; /* 文本左对齐 */
}
.title {
  font-size: 24px;
  margin-bottom: 20px;
}
.info-row {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}
.info-row p {
  margin: 0;
  color: #a0a0a0; /* 设置标签颜色 */
}
.value {
  color: black; /* 具体内容颜色 */
}
.label-status {
  padding: 5px 10px;
  background-color: #e6f0ff;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 5px;
  font-size: 16px;
  margin-top: -5px;
}


.bottom {
    height: auto;
    border-radius: 8px;
    background-color: #fff;
    margin-top: 30px;
    padding: 20px;
}
.analysis-title {
    display: inline-block;
    font-size: 18px;
    font-weight: normal;
    background-color: #e6f0ff;
    padding: 5px 10px;
    border-radius: 5px;
    color: #333;
    margin-bottom: 20px;
}
.card-container {
  display: flex;
  justify-content: space-between;
}
.card {
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  padding: 20px;
  display: flex;
  align-items: center;
}
.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}
.icon-user, .icon-chart, .icon-time {
  font-size: 24px;
  color: #ff6b6b;
}
.icon-chart {
  color: #4d89ff;
}
.icon-time {
  color: #ffb84d;
}
.content h3 {
  margin: 0;
  font-size: 24px;
}
.content small {
  font-size: 14px;
  color: #888;
}
.content p {
  margin: 5px 0 0 0;
  font-size: 14px;
  color: #666;
}

.statistical-chart {
    margin-top: 20px;
}
</style>
