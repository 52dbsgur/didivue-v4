import Vue from "vue";
import Router from "vue-router";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import Record from "../components/Record";
import Stacks from "../components/Stacks";
import Settings from "../components/Settings";
import Login from "../components/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/layout",
      name: "layout",
      component: Layout,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "record",
          name: "record",
          component: Record
        },
        {
          path: "stacks",
          name: "stacks",
          component: Stacks
        },
        {
          path: "settings",
          name: "settings",
          component: Settings
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "landing",
      component: Login
    }

  ]
});
