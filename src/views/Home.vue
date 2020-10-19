<template>
	<div class="home">
		<div class="headerBox">
			<div class="logo">
				<img class="logoImg" src="./../assets/logo_1.png" alt="" />
			</div>
			<div class="navBox">
				<div class="navItem" v-for="v in nav" :key="`item-${v}`">{{ v }}</div>
			</div>
		</div>
		<el-carousel :interval="5000" arrow="always" height="900px">
			<el-carousel-item>
				<div class="swiperItem swiperItem1">
					<img
						class="bannerItem1-1"
						src="./../assets/banner1-1.webp"
						alt="tupian"
					/>
				</div>
			</el-carousel-item>
			<el-carousel-item>
				<div class="swiperItem swiperItem2">
					<span class="swiperItem2-1">做您信任的供应商</span>
				</div>
			</el-carousel-item>
		</el-carousel>
		<div class="fkEditor simpleText">
			<span style="line-height: 45px;"
				><div style="text-align: center;">
					<span style="font-size: 34px;">
						<span style="color: rgb(53, 53, 53)">
							广告机服务提供商
						</span>
					</span>
				</div>
				<div style="text-align: center;">
					<font color="#353535">
						<span style="font-size: 14px; color: rgb(153, 153, 153);">
							公司秉承质量、服务至上的宗旨，按照客户需求精心设计、科学管理、严格生产
						</span>
					</font>
				</div>
			</span>
		</div>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="gridContent">
					<div class="gridIcon gridIcon1"></div>
					<h3>品牌可信赖</h3>
					<div class="gridDes">
						多年设计经验，产品贯穿每一个行业<br />覆盖多个城市的户外广告
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="gridContent">
					<div class="gridIcon gridIcon2"></div>
					<h3>性价比</h3>
					<div class="gridDes">
						为客户需求而设计，解决中小型企业<br />的投入产出比而赢得广大客户嘉许
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="gridContent">
					<div class="gridIcon gridIcon3"></div>
					<h3>自主创新</h3>
					<div class="gridDes">
						始终以产品质量为核心，服务至上为<br />已任，坚持自主创新的经营理念
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="gridContent">
					<div class="gridIcon gridIcon4"></div>
					<h3>专业服务</h3>
					<div class="gridDes">
						从始而终服务于中小型企业，助其提<br />供tt企业知名度
					</div>
				</div>
			</el-col>
		</el-row>
		<div class="cooperation">
			<h1>合作客户</h1>
			<div class="cooperationBox">
				<el-row>
					<el-col :span="6">
						<div class="cooperationItem">
							<div class="itemLogo">1</div>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="cooperationItem">
							<div class="itemLogo">2</div>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="cooperationItem">
							<div class="itemLogo">3</div>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="cooperationItem">
							<div class="itemLogo">4</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<div>
			<div class="fkEditor simpleText">
				<span style="line-height: 45px;">
					<div style="text-align: center;">
						<font color="#353535">
							<span style="font-size: 34px;"> 产品中心</span>
						</font>
					</div>
					<div style="text-align: center;">
						<font color="#999999">
							<span style="font-size: 14px;">
								严格的高技术把关，打造质量好的产品
							</span>
						</font>
					</div>
				</span>
			</div>
			<el-row class="productBox">
				<el-col :span="8">
					<div class="productItem">
						<div>
							<div class="productImage productImage1" />
							<div class="productText">户外防水广告机</div>
						</div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="productItem">
						<div>
							<div class="productImage productImage2" />
							<div class="productText">触摸一体机</div>
						</div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="productItem">
						<div>
							<div class="productImage productImage3" />
							<div class="productText">透明展示柜</div>
						</div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="productItem">
						<div>
							<div class="productImage productImage1" />
							<div class="productText">户外防水广告机</div>
						</div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="productItem">
						<div>
							<div class="productImage productImage2" />
							<div class="productText">触摸一体机</div>
						</div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="productItem">
						<div>
							<div class="productImage productImage3" />
							<div class="productText">透明展示柜</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="introductionBox">
			<div class="introductionLeft">
				<h1>公司简介</h1>
				<p>
					某某科技有限公司是专门从事大屏显示系统的研发、生产与销售，产品面向整个亚太地区。公司始终以产品质量为核心，服务至上为已任，作为国内的户外广告机及应用解决方案的供应商，始终站在液晶显示行业发展的前沿，并长期与国际知名液晶品牌厂商保持良好的战略合作伙伴关系。
				</p>
				<p>
					公司主营产品有：液晶广告机、触摸一体机、液晶拼接屏、液晶监视器、户外广告机等商显产品，产品尺寸覆盖10.1-98寸，产品采用优质的原材料并完全按照国家标准研发，具备了精外观、低功耗、高品质、高音质、高画质等特点。产品质量可靠并成功通过国家强制性CCC认证、CE认证、FCC认证、ROHS认证等，保证产品性能和安全。产品广泛用于政府、医院、车站、商业楼宇、超市、地铁、酒店、教育、地产、文化传媒等行业。
				</p>
			</div>
			<div class="introductionright"></div>
		</div>
		<div class="footer">
			<div>
				<div class="footerText">24小时服务热线</div>
				<div class="footerIpone">010-1000000</div>
			</div>
		</div>
		<div class="footerTip">©2020 jingdongdianqi</div>
	</div>
</template>
<script>
export default {
	name: "Home",
	data() {
		return {
			nav: ["首页", "公司简介", "产品中心", "成功案例", "合作加盟", "联系我们"],
		};
	},
	mounted() {},
	components: {},
};
</script>
<style lang="less" scoped>
.home {
	.headerBox {
		height: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo {
			padding-left: 50px;
			.logoImg {
				width: 80px;
			}
		}
		.navBox {
			display: flex;
			font-family: "微软雅黑";
			font-size: 26px;
			margin-right: 40px;
			.navItem {
				margin-right: 20px;
			}
		}
	}
	.swiperItem {
		height: 900px;
		position: relative;
	}
	.swiperItem1 {
		background: url("./../assets/banner1.jpg") center center no-repeat;
		background-size: cover;
		.bannerItem1-1 {
			position: absolute;
			right: 100px;
			bottom: 100px;
		}
	}
	.swiperItem2 {
		background: url("./../assets/banner2.jpg") center center no-repeat;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		.swiperItem2-1 {
			font-size: 80px;
			color: rgb(255, 255, 255);
			background-color: initial;
		}
	}
	.fkEditor {
		padding-top: 80px;
		position: relative;
	}
	.gridContent {
		text-align: center;
		padding-top: 50px;
		padding-bottom: 100px;
		.gridIcon {
			width: 117px;
			height: 117px;
			margin: 0 auto 20px;
		}
		.gridIcon1 {
			background: url("./../assets/icon-1.webp") 100% 100% no-repeat;
			background-size: cover;
		}
		.gridIcon2 {
			background: url("./../assets/icon-2.webp") 100% 100% no-repeat;
			background-size: cover;
		}
		.gridIcon3 {
			background: url("./../assets/icon-3.webp") 100% 100% no-repeat;
			background-size: cover;
		}
		.gridIcon4 {
			background: url("./../assets/icon-4.webp") 100% 100% no-repeat;
			background-size: cover;
		}
		h3 {
			font-size: 18px;
			margin-bottom: 20px;
			color: rgb(53, 53, 53);
		}
		.gridDes {
			line-height: 24px;
			font-size: 14px;
			color: rgb(102, 102, 102);
		}
	}
	.cooperation {
		height: 380px;
		background-color: rgba(247, 247, 247, 1);
		h1 {
			font-size: 45px;
			text-align: center;
			padding-top: 80px;
			margin-bottom: 50px;
		}
		.cooperationBox {
			width: 100%;
			height: 150px;
			text-align: center;
			.cooperationItem {
				display: flex;
				align-items: center;
				justify-content: center;
				.itemLogo {
					width: 165px;
					height: 84px;
					background-color: #fff;
					border-radius: 4px;
				}
			}
		}
	}
	.productBox {
		padding-top: 20px;
		.productItem {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			.productImage {
				width: 370px;
				height: 250px;
				border: 1px solid rgba(230, 230, 230, 1);
			}
			.productImage1 {
				background: url("./../assets/Product-1.png") center center no-repeat;
				background-size: cover;
			}
			.productImage2 {
				background: url("./../assets/Product-2.png") center center no-repeat;
				background-size: cover;
			}
			.productImage3 {
				background: url("./../assets/Product-3.png") center center no-repeat;
				background-size: cover;
			}
			.productText {
				height: 40px;
				color: #666;
				font-size: 16px;
				line-height: 40px;
				margin: 20px 0;
				text-align: center;
			}
		}
	}
	.introductionBox {
		height: 600px;
		padding: 0 50px;
		background-color: rgba(247, 247, 247, 1);
		display: flex;
		align-items: center;
		.introductionLeft {
			flex: 3;
			h1 {
				padding-bottom: 20px;
				font-size: 34px;
				color: rgb(53, 53, 53);
			}
			p {
				font-size: 14px;
				line-height: 30px;
				margin-bottom: 20px;
				color: rgb(102, 102, 102);
			}
		}
		.introductionright {
			flex: 1;
			height: 400px;
			margin: 20px;
			background: url("./../assets/introduction.webp") center center no-repeat;
			background-size: cover;
		}
	}
	.footer {
		height: 150px;
		background-color: #333;
		display: flex;
		justify-content: center;
		align-items: center;
		.footerText {
			text-align: center;
			font-size: 14px;
			color: rgb(115, 115, 115);
		}
		.footerIpone {
			text-align: center;
			font-size: 36px;
			color: rgb(0, 160, 233);
		}
	}
	.footerTip {
		height: 30px;
		color: #8b919d;
		text-align: center;
		background-color: #333;
		font-size: 14px;
		line-height: 20px;
	}
}
</style>
<style lang="less">
.el-carousel__arrow {
	height: 60px;
	width: 60px;
}
.el-icon-arrow-right,
.el-icon-arrow-left {
	font-size: 40px;
}
</style>
