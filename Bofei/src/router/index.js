import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { /* 登录页面 */
      path: '/login',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue')
    },
    { /* 登录页面 */
      path: '/',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue')
    },
    { /* 学生主页 */
      path: '/stuHome',
      name: 'StuHomeView',
      component: () => import('../views/studentViews/StudentHome.vue')
    },
    { /* 教师主页 */
      path: '/teaHome',
      name: 'TeaHomeView',
      component: () => import('../views/teacherViews/TeacherHome.vue')
    },
    { /* 测试详情 */
      path: '/testDetail',
      name: 'TestDetail',
      component: () => import('../views/teacherViews/TestDetailView.vue')
    },
    { /* 发布测试 */
      path: '/publishTests',
      name: 'PublishTests',
      component: () => import('../views/teacherViews/PublishTestsView.vue')
    },

  ]
})

export default router
