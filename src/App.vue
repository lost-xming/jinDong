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
	font-family: Avenir, Helvetica, Arial, sans-serif;
	background: linear-gradient(230deg, #e6f0ff, #ecf6e5, #ffffff);
	background-size: 300% 300%;
	-webkit-animation: MoveBG 30s ease infinite;
	-moz-animation: MoveBG 30s ease infinite;
	animation: MoveBG 30s ease infinite;
}

@-webkit-keyframes MoveBG {
	0% {
		background-position: 0% 84%;
	}
	50% {
		background-position: 100% 16%;
	}
	100% {
		background-position: 0% 84%;
	}
}
@-moz-keyframes MoveBG {
	0% {
		background-position: 0% 84%;
	}
	50% {
		background-position: 100% 16%;
	}
	100% {
		background-position: 0% 84%;
	}
}
@keyframes MoveBG {
	0% {
		background-position: 0% 84%;
	}
	50% {
		background-position: 100% 16%;
	}
	100% {
		background-position: 0% 84%;
	}
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
	font: inherit;
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
