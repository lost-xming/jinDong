<template>
  <div class="contactCom">
    <div class="contactLeft">
      <h1>联系我们</h1>
      <p>
        某某公司液晶显示产品覆盖传媒、商业、安防、教育等多个领域。某某公司拥有一批从事智能显示设备、物联网设备研发的工程师及生产线，更好地保障了公司多媒体液晶显示设备的优良性能和高品质。为了给客户提供更好的产品和服务，某某公司不断拓展和完善营销渠道，已建成行业内较完善的营销渠道服务网络。
      </p>
      <p>PHONE : 0769-22225669</p>
      <p>E-MAIL : jindong2020@126.com</p>
      <p>公司地址 : XXX省XXX市XXX县XXX路XXX号</p>
    </div>
    <div class="contactRight">
      <div class="item">
        <div class="itemLeft">微信：</div>
        <div class="erweima weChat" />
      </div>
      <div class="item">
        <div class="itemLeft">QQ：</div>
        <div class="erweima QQ" />
      </div>
      <div class="item">
        <div class="itemLeft">微信公众号：</div>
        <div class="erweima gongzhonghao" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.contactCom {
  width: 1200px;
  height: 550px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .contactLeft {
    flex: 3;
    margin-right: 40px;
    h1 {
      font-size: 34px;
      color: rgb(53, 53, 53);
      font-weight: 400;
      margin-bottom: 50px;
    }
    p {
      font-size: 14px;
      line-height: 30px;
      color: rgb(102, 102, 102);
      margin-bottom: 20px;
    }
  }
  .contactRight {
    flex: 2;
    .item {
      font-size: 16px;
      color: rgb(53, 53, 53);
      font-weight: 400;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      .itemLeft {
        width: 150px;
      }
      .erweima {
        width: 100px;
        height: 100px;
      }
      .gongzhonghao,
      .weChat,
      .QQ {
        background: url("./../assets/gongzhonghao.jpg") center center no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
