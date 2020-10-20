<template>
  <div :class="['introductionBox', type === '1' ? 'introductionBox2' : null]">
    <div class="introductionLeft">
      <h1>公司简介</h1>
      <p>
        某某科技有限公司是专门从事大屏显示系统的研发、生产与销售，产品面向整个亚太地区。公司始终以产品质量为核心，服务至上为已任，作为国内的户外广告机及应用解决方案的供应商，始终站在液晶显示行业发展的前沿，并长期与国际知名液晶品牌厂商保持良好的战略合作伙伴关系。
      </p>
      <p>
        公司主营产品有：液晶广告机、触摸一体机、液晶拼接屏、液晶监视器、户外广告机等商显产品，产品尺寸覆盖10.1-98寸，产品采用优质的原材料并完全按照国家标准研发，具备了精外观、低功耗、高品质、高音质、高画质等特点。产品质量可靠并成功通过国家强制性CCC认证、CE认证、FCC认证、ROHS认证等，保证产品性能和安全。产品广泛用于政府、医院、车站、商业楼宇、超市、地铁、酒店、教育、地产、文化传媒等行业。
      </p>
    </div>
    <div
      :class="[type === '1' ? 'introductionright1' : 'introductionright2']"
      :style="{ flex: type === '1' ? 1 : 2 }"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "1"
    }
  }
};
</script>
<style lang="less" scoped>
.introductionBox {
  height: 600px;
  padding: 0 50px;
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
  .introductionright1 {
    height: 400px;
    margin: 20px;
    background: url("./../assets/introduction.webp") center center no-repeat;
    background-size: cover;
  }
  .introductionright2 {
    height: 400px;
    margin: 20px;
    background: url("./../assets/jianjie-2.webp") center center no-repeat;
    background-size: cover;
  }
}
.introductionBox2 {
  background-color: rgba(247, 247, 247, 1);
}
</style>