<template>
	<div id="app">
		<div id="nav"></div>
		<router-view />
	</div>
</template>

<style lang="less">
html,
body {
	height: 100%;
	width: 100%;
}
#app {
	min-height: 100%;
	min-width: 100%;
	font-family: "微软雅黑", "宋体", "新宋体", sans-serif;
	background-color: #fff;
}

a {
	color: inherit;
	text-decoration: none;
}

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}

ol,
ul {
	list-style: none;
}
</style>
