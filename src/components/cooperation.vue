<template>
  <div :class="['cooperation', type === '1' ? 'cooperation2' : null]">
    <h1>合作客户</h1>
    <div class="cooperationBox">
      <el-row>
        <el-col :span="6" v-for="(v, i) in logoArr" :key="`${i}-index`">
          <div class="cooperationItem">
            <div :class="['itemLogo', type === '1' ? 'itemLogo2' : null]">
              <img :src="v.src" :alt="v.name" class="imgLogoItem" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {
      logoArr: [
        {
          src: require("./../assets/wode.png"),
          name: "沃德商贸"
        },
        {
          src: require("./../assets/tongxu.png"),
          name: "桐旭科技"
        },
        {
          src: require("./../assets/qiaoxing.png"),
          name: "恰星商贸"
        },
        {
          src: require("./../assets/zhuoyang.png"),
          name: "卓阳科技"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.cooperation {
  height: 380px;

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
        border-radius: 4px;
        background-color: rgba(247, 247, 247, 1);
      }
      .itemLogo2 {
        background-color: #fff;
      }
    }
  }
}
.cooperation2 {
  background-color: rgba(247, 247, 247, 1);
}
.imgLogoItem {
  width: 165px;
}
</style>