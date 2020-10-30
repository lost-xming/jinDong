<template>
  <div>
    <div class="fkEditor simpleText">
      <span style="line-height: 45px;">
        <div style="text-align: center;">
          <font color="#353535">
            <span style="font-size: 34px;"> 产品中心</span>
          </font>
        </div>
        <div style="text-align: center;">
          <font color="#999999">
            <span style="font-size: 14px;">
              严格的高技术把关，打造质量好的产品
            </span>
          </font>
        </div>
      </span>
    </div>
    <el-row class="productBox">
      <el-col :span="8">
        <div class="productItem">
          <div>
            <div class="productImage productImage1" />
            <div class="productText">厨余垃圾处理器A</div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="productItem">
          <div>
            <div class="productImage productImage2" />
            <div class="productText">厨余垃圾处理器B</div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="productItem">
          <div>
            <div class="productImage productImage3" />
            <div class="productText">厨余垃圾处理器C</div>
          </div>
        </div>
      </el-col>
      <!-- <el-col :span="8">
        <div class="productItem">
          <div>
            <div class="productImage productImage1" />
            <div class="productText">户外防水广告机</div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="productItem">
          <div>
            <div class="productImage productImage2" />
            <div class="productText">触摸一体机</div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="productItem">
          <div>
            <div class="productImage productImage3" />
            <div class="productText">透明展示柜</div>
          </div>
        </div>
      </el-col> -->
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.fkEditor {
  padding-top: 80px;
  position: relative;
}
.productBox {
  padding-top: 20px;
  .productItem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .productImage {
      width: 370px;
      height: 250px;
      border: 1px solid rgba(230, 230, 230, 1);
    }
    .productImage1 {
      background: url("./../assets/Product-1.png") center center no-repeat;
      background-size: contain;
    }
    .productImage2 {
      background: url("./../assets/Product-2.png") center center no-repeat;
      background-size: contain;
    }
    .productImage3 {
      background: url("./../assets/Product-3.png") center center no-repeat;
      background-size: contain;
    }
    .productText {
      height: 40px;
      color: #666;
      font-size: 16px;
      line-height: 40px;
      margin: 20px 0;
      text-align: center;
    }
  }
}
</style>