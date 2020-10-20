<template>
  <div class="newsBox">
    <div v-for="v in 9" :key="`${v}-index`" class="newItem">
      <div class="newLeft">
        <p class="big_time">
          20
        </p>
        <p class="small_time">
          2019-11
        </p>
      </div>
      <div class="newRight">
        <h3>电容触摸一体机机常见故障</h3>
        <p>
          问：电容触摸一体机机黑屏怎么办？答：电容触摸一体机机黑屏解决方法是首先插上电源后，看后面开关键旁的指示灯亮或不亮，若指示灯不亮，检查电源适配器上的指示灯亮不亮，不亮证明无电源输入，若灯闪亮…
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.newsBox {
  padding: 20px 50px;
  .newItem {
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .newLeft {
      width: 150px;
      height: 100px;
      text-align: center;
      padding-top: 15px;
      background-color: #eeeeee;
      border-radius: 6px;
      margin-right: 20px;
      .big_time {
        color: #626971;
        font-size: 24px;
        margin-bottom: 10px;
        font-weight: 500;
      }
      .small_time {
        color: #626971;
        font-size: 14px;
      }
    }
    .newRight {
      cursor: pointer;
      h3 {
        font-size: 16px;
        columns: #333333;
        margin-bottom: 10px;
      }
      p {
        line-height: 26px;
        color: #878787;
        font-size: 14px;
      }
    }
  }
}
</style>