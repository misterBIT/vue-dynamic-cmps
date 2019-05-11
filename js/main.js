import homeCmp from "./pages/home.cmp.js";
import surveyCmp from "./pages/survey.cmp.js";

const routes = [
  {
    path: "/",
    component: homeCmp
  },
  {
    path: "/survey",
    component: surveyCmp
  }
];
const router = new VueRouter({ routes });

new Vue({
  template: `
    <section>
        <nav>
            <router-link to="/">Home</router-link>  |
            <router-link to="/survey">Survey</router-link>
        </nav>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>

    </section>
    `,
  router
}).$mount("#app");
