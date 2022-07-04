import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Teaching from "@/components/Teaching.vue";
import Contact from "@/components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/teaching",
    name: "Teaching",
    component: Teaching,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;