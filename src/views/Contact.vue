<template>
  <div class="contactBox">
    <Header />
    <div class="mapBox">
      <div class="map"></div>
    </div>
    <div class="contactInfo"><Contact-com /></div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactCom from "@/components/contact";
export default {
  name: "Product",
  data() {
    return {};
  },
  mounted() {},
  components: {
    Header,
    Footer,
    ContactCom
  }
};
</script>
<style lang="less" scoped>
.contactBox {
  .mapBox {
    padding-top: 100px;
    margin-bottom: 100px;
    .map {
      width: 1200px;
      height: 420px;
      background: url("./../assets/map-1.png") center center no-repeat;
      background-size: cover;
      margin: 0 auto;
    }
  }
  .contactInfo {
    background-color: rgba(250, 250, 250, 1);
  }
}
</style>