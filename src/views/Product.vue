<template>
  <div>
    <Header />
    <Product-com />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCom from "@/components/product";
export default {
  name: "Product",
  data() {
    return {};
  },
  mounted() {},
  components: {
    Header,
    Footer,
    ProductCom
  }
};
</script>
<style lang="less" scoped>
</style>