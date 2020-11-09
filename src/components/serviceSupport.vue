<template>
  <div class="newsBox">
    <div v-for="(v, i) in newsArr" :key="`${i}-index`" class="newItem">
      <div class="newLeft">
        <p class="big_time">
          {{ v.timer2 }}
        </p>
        <p class="small_time">
          {{ v.timer1 }}
        </p>
      </div>
      <div class="newRight">
        <a :href="v.link">
          <h3>{{ v.title }}</h3>
          <p>
            {{ v.desc }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsArr: [
        {
          link: "https://mp.weixin.qq.com/s/jV4ZyAlRO9zr4AvdNXU7Qg",
          timer1: "2020-10",
          timer2: "25",
          title: "厨余垃圾怎么处理？",
          desc:
            "要说现在居民在生活中都有的一项烦恼，大概就是垃圾分类了。要说家庭垃圾里，最让人嫌弃的垃圾是啥?如果厨余垃圾排第二，没有垃圾敢排第一..."
        },
        {
          link: "https://mp.weixin.qq.com/s/QVlQ0obJ1PH-FxuSUJuiVQ",
          timer1: "2020-10",
          timer2: "29",
          title: "核维斯厨余垃圾处理器",
          desc:
            "目前垃圾处理器简介及弊端1927年美国人约翰.汉默斯发明了世界上第一台锤击式垃圾处理器，很快的在西方国家得到流行与使用。但是由于东西方饮食文化的差异，导致此产品在中国水土不服，其在运行过程中由于工作原理原因，锤头极易被绕死，锤击噪音大，易卡机..."
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.newsBox {
  padding: 20px 50px;
  .newItem {
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    // justify-content: space-between;
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