import Vue from "vue"
import VueRouter from "vue-router"

const ContentManage = () => import("../pages/content-manage/index.vue")

const routes = [
  {
    path: "/content-manage",
    component: ContentManage,
  },
  {
    path:"/",
    redirect:"/content-manage"
  }
]

function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

Vue.use(VueRouter)
const router = new VueRouter({ routes, scrollBehavior })
export default router
