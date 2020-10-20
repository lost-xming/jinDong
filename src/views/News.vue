<template>
  <div>
    <Header />
    <News />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import News from "@/components/serviceSupport";
export default {
  name: "Product",
  data() {
    return {};
  },
  mounted() {},
  components: {
    Header,
    Footer,
    News
  }
};
</script>