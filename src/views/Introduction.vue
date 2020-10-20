<template>
  <div class="about">
    <Header />
    <div class="headerImg"></div>
    <Introd type="2" />
    <div class="advantage">
      <div class="advantageText">
        <h1>我们的优势</h1>
        <p>
          某某户外广告机产品覆盖传媒、商业、安防、教育等多个领域。我们拥有一批从事智能显示设备、物联网设备研发的工程师及生产线，更好地保障了公司多媒体液晶显示设备的优良性能和高品质。我们先后通过了CE认证、FCC认证、RoHS认证、CCC认证、ISO9001-2008等认证，严苛的质量控制体系确保产品可靠，健全的研发体系保障产品的持续创新。为了给客户提供更好的产品和服务不断拓展和完善营销渠道，已建成行业内强大的营销渠道服务网络。
        </p>
        <p>
          未来，我们将开展一体化发展战略体系，为客户创造价值，为社会发展贡献力量，积极响应国家绿色环保号召。
        </p>
      </div>
    </div>
    <Cooperation type="2" />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header";
import Introd from "@/components/introduction";
import Footer from "@/components/footer";
import Cooperation from "@/components/cooperation";
export default {
  name: "introduction",
  data() {
    return {};
  },
  mounted() {},
  components: {
    Header,
    Introd,
    Footer,
    Cooperation
  }
};
</script>
<style lang="less" scoped>
.headerImg {
  height: 300px;
  background: url("./../assets/jianjie-4.jpg") center center no-repeat;
  background-size: cover;
}
.advantage {
  height: 586px;
  background: url("./../assets/jianjie-3.jpg") center center no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 40px;
  .advantageText {
    width: 820px;
    color: rgb(102, 102, 102);
    position: absolute;
    top: 160px;
    left: 400px;
    h1 {
      color: #333;
      font-size: 34px;
      font-weight: 400;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      line-height: 30px;
      font-weight: 400;
      margin-bottom: 20px;
    }
  }
}
</style>