<template>
  <div class="headerBox">
    <div class="logo">
      <img class="logoImg" src="./../assets/logo_1.png" alt="" />
    </div>
    <div class="navBox">
      <div
        v-for="v in nav"
        :class="['navItem', v.path === actionPath ? 'navAction' : null]"
        :key="`item-${v.path}`"
      >
        <router-link :to="{ path: v.path }">{{ v.name }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      actionPath: "/",
      nav: [
        { path: "/", name: "首页" },
        { path: "/introduction", name: "公司简介" },
        { path: "/product", name: "产品中心" },
        { path: "/news", name: "服务支持" },
        { path: "/contact", name: "联系我们" }
      ]
    };
  },
  mounted() {
    console.log(this.actionPath);
    this.actionPath = this.$route.path;
  }
};
</script>
<style lang="less" scoped>
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
      cursor: pointer;
    }
    .navAction,
    .navItem:hover {
      color: #ff7c00;
      border-bottom: 1px solid #ff7c00;
    }
  }
}
</style>