import VueRouter from "../vue-router";
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import About1 from "../components/About1.vue"
import About2 from "../components/About2.vue"

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About,
    children: [
      {
        path: "about1",
        component: About1
      },
      {
        path: "about2",
        component: About2
      }
    ]
  }
]

const router = new VueRouter({
  mode: "hash",
  routes,
})

export {
  router,
}