<template>
  <div class="home">
    <Header />
    <el-carousel :interval="5000" arrow="always" height="900px">
      <el-carousel-item>
        <div class="swiperItem swiperItem1" />
      </el-carousel-item>
      <el-carousel-item>
        <div class="swiperItem swiperItem2">
          <span class="swiperItem2-1">做您信任的供应商</span>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="swiperItem swiperItem3" />
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
    <Cooperation type="1" />
    <Product />
    <Introd type="1" />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header";
import Introd from "@/components/introduction";
import Footer from "@/components/footer";
import Cooperation from "@/components/cooperation";
import Product from "@/components/product";
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {},
  components: {
    Header,
    Introd,
    Footer,
    Cooperation,
    Product
  }
};
</script>
<style lang="less" scoped>
.home {
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
  .swiperItem3 {
    background: url("./../assets/banner3.jpg") center center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
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
}
</style>
<style lang="less">
.el-carousel__arrow {
  height: 80px;
  width: 80px;
}
.el-icon-arrow-right,
.el-icon-arrow-left {
  font-size: 40px;
}
</style>
