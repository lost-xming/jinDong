import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/introduction",
		name: "Introduction",
		component: () => import("../views/Introduction.vue"),
	},
	{
		path: "/product",
		name: "product",
		component: () => import("../views/Product.vue"),
	},
	{
		path: "/news",
		name: "news",
		component: () => import("../views/News.vue"),
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import("../views/Contact.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
