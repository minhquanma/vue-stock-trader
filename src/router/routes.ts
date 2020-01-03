import Home from "@/views/Home.vue";
import Portfolio from "@/components/portfolio/Portfolio.vue";
import Stocks from "@/components/stocks/Stocks.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/portfolio",
        component: Portfolio
    },
    {
        path: '/stocks',
        component: Stocks
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];