import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: require("@/components/HelloWorld").default
    },
    {
      path: "/login",
      name: "login-page",
      component: require("@/components/Login").default
    },
    {
      path: "/system-info",
      name: "system-info-page",
      component: require("@/components/SystemInformation").default
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
