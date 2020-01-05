import Vue from "Vue";
import Router from "vue-router";
import Home from "./components/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Home",
      name: "Home",
      commponent: Home
    }
  ]
});
