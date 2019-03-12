import Vue from "vue";
import Router from "vue-router";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import Record from "../components/Record";
import Stacks from "../components/Stacks";
import Settings from "../components/Settings";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/layout",
      name: "layout",
      component: Layout,
      children: [
        {
          path: "/Dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "/Record",
          name: "record",
          component: Record
        },
        {
          path: "/Stacks",
          name: "stacks",
          component: Stacks
        },
        {
          path: "/Settings",
          name: "settings",
          component: Settings
        }
      ]
    }
  ]
});
