import { createWebHistory, createRouter } from "vue-router";
import NotFound from '/@/views/NotFound.vue';
import Home from '/@/views/Home.vue';
import LifeCycle from '/@/views/LifeCycle.vue';
import CompositionAPI from '/@/views/CompositionAPI.vue';
import TodoList from '/@/views/TodoList/index.vue';

const routes = [
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/LifeCycle",
    name: "LifeCycle",
    component: LifeCycle,
  },
  {
    path: "/CompositionAPI",
    name: "CompositionAPI",
    component: CompositionAPI,
  },
  {
    path: "/TodoList",
    name: "TodoList",
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;