import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: "首页",
		},
	},
	{
		path: "/introduction",
		name: "Introduction",
		component: () => import("../views/Introduction.vue"),
		meta: {
			title: "公司简介",
		},
	},
	{
		path: "/product",
		name: "product",
		component: () => import("../views/Product.vue"),
		meta: {
			title: "产品中心",
		},
	},
	{
		path: "/news",
		name: "news",
		component: () => import("../views/News.vue"),
		meta: {
			title: "服务支持",
		},
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import("../views/Contact.vue"),
		meta: {
			title: "联系我们",
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
