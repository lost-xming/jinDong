<template>
  <div class="home">
    <Row>
      <Col span="2" />
      <Col span="20">
        <Skeleton class="header_box" :row="10" :loading="loading">
          <div class="header">
            <a href="/" title="color space home">
              <div class="logo">
                <img class="logoImg" :src="require('../assets/logo.png')" alt="logo" />
                <img src="../assets/logo.svg" class="logo_svg_style" alt />
              </div>
            </a>
            <nav class="effect">
              <ul>
                <li>
                  <a href="/">首页</a>
                </li>
                <li>
                  <a class="active" href>产品介绍</a>
                </li>
                <li class="gc3">
                  <a href>关于我们</a>
                </li>
              </ul>
            </nav>
          </div>
        </Skeleton>
        <Skeleton :row="10" :loading="loading">
          <div class="content">
            <div class="video_box">
              <video width="40em" class="video" loop controls autoplay src="./../assets/video.mp4"></video>
            </div>
            <div class="text_info">
              <h1>产品说明：</h1>
              <div class="_2e3H5v5s">
                <span class="_36Bu1ZrV _2uxc_Kz3">厨余垃圾处理器</span>
              </div>
              <div class="_2gwTVEC3">
                本发明公开了一种适用于厨房洗水槽中的厨余垃圾处理器，其包括:料仓、刀组、驱动电机、以及连接驱动电机和刀组的传动组件，料仓具有用于容置刀组的腔体，于料仓上开设有与腔体连通的进料口和出料口;刀组包括同心设置的外刀盘和内刀盘，外刀盘和内刀盘相互叠加、并通过传动组件带动实现正反相对转动，所述的外刀盘和内刀盘的上端面分别成型有相互配合的刀齿;厨余垃圾由进料口进入料仓的腔体内，通过外刀盘和内刀盘的相对运转将厨余垃圾粉碎后，并由出料口排出。采用上述技术方案后，本发明采用端面刀齿、利用离心力作用对垃圾进行粉碎，并且端面刀齿位于刀盘的边缘，这样也确保了使用者的安全
                ，防止意外发生 。同时 ，整个结构稳固
                ，运行稳定，不会出现运行抖动、噪音较大等问题。
              </div>
            </div>
          </div>
        </Skeleton>
        <Skeleton :row="10" :loading="loading">
          <div class="_2Ujv3m-Y">
            <div class="_3Mh9TFqF">
              <h2 class="oIx3cEQy">产品的优点：</h2>
              <ul class="ZFvTp8ys">
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    1.一种厨余垃圾处理器，包括:料仓(1)、安装在料仓(1)内用于粉碎厨余垃圾的刀组(2)、位于料仓(1)外的驱动电机(3)、以及连接驱动电机(3)和刀组的传动组件(4)，其特征在于:
                  </h3>
                  <p class="_3fhsGtqy">
                    所述的料仓(1)具有用于容置刀组(2)的腔体(10)，于料仓(1)上开设有与腔体(10)连
                    通的进料口(11)和出料口(12);所述的刀组(2)包括同心设置的外刀盘(21)和内刀盘(22)，外刀盘(21)和内刀盘(22)相互叠加、并通过传动组件(4)带动实现正反相对转动，所述的外刀盘(21)和内刀盘(22)的上端面分别成型有相互配合的刀齿;厨余垃圾由进料口(11)进入料仓(1)的腔体(10)内，通过外刀盘(21)和内刀盘(22)的相对运转将厨余垃圾粉碎后，并由出料口(12)排出。
                  </p>
                </li>
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    2.根据权利要求1所述的一种厨余垃圾处理器，其特征在于:
                  </h3>
                  <p
                    class="_3fhsGtqy"
                  >所述的刀组(2)还包括一套设在外刀盘(21)外的刀筒(23)，该刀筒(23)的内径与外刀盘(21)的外径对应，并且于刀筒(23)的圆周面上开设有通孔(231)</p>
                </li>
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    3.根据权利要求2所述的一种厨余垃圾处理器 ，其特征在于:
                  </h3>
                  <p
                    class="_3fhsGtqy"
                  >所述的刀筒(23)上成型有卡凸(232)，于料仓(1)的内壁设置有与所述卡凸(232)配合的卡槽(13)，通过卡凸(232)与卡槽(13)的卡嵌配合令刀筒(23)安装在料仓(1)内。</p>
                </li>
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    4.根据权利要求1所述的一种厨余垃圾处理器，其特征在于:
                  </h3>
                  <p class="_3fhsGtqy">所述的刀组(2)还包括下刀片(24)，该下刀片(24)位于外刀盘(21)下方，并通过传动组件(4)带动。</p>
                </li>
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    5.根据权利要求1所述的一种厨余垃圾处理器，其特征在于:
                  </h3>
                  <p class="_3fhsGtqy">
                    所述的传动组件(4)包括:由套轴(41)和内轴(42)构成的同心双轴，以及一变向齿轮箱(43
                    )，套轴(41)与内轴(42)之间通过变向齿轮箱(43)实现连动，并改变转动方向;所述的内轴(42)一端与驱动电机(3)连动，另一端与内刀盘(22)连接，所述的套轴(41)套设在内轴(42)外、并与外刀盘(21)连接;驱动电机(3)通过内轴(42)带动内刀盘(22)正向转动，内轴(42)通过变向齿轮箱(43)带动套轴(41)反转，并同时带动外刀盘(21)反转。
                  </p>
                </li>
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    6.根据权利要求5所述的一种厨余垃圾处理器，其特征在于:所述的变向齿轮箱(43)包括:
                  </h3>
                  <p
                    class="_3fhsGtqy"
                  >与套轴(41)固定的外齿轮(431)、于内轴(42)固定的内齿轮(432)、中间齿轮(433)和双联齿轮(434)，其中;所述的内齿轮(432)与中间齿轮(433)啮合，所述的中间齿轮(433)与双联齿轮(434)中的一个齿轮啮合，双联齿轮(434)中另一齿轮与外齿轮(431)啮合。</p>
                </li>
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    7.根据权利要求1所述的一种厨余垃圾处理器，其特征在于:
                  </h3>
                  <p class="_3fhsGtqy">该厨余垃圾处理器还包括一壳体(5)，所述的料仓(1)、驱动电机(3)和传动组件(4)被罩设在壳体(5)内。</p>
                </li>
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    8.根据权利要求1-7中任意一项所述的一种厨余垃圾处理器，其特征在于:
                  </h3>
                  <p
                    class="_3fhsGtqy"
                  >所述外刀盘(21)上端面成型的刀齿为复合刀齿，该复合刀齿包括:位于外圆的外刀齿(211)和位于內圆的内刀齿(212)，其中外刀齿(211)与内刀齿(212)相互交错;所述的内刀盘(22)上端面成型有至少两个与所述内刀齿(212)配合的切割刀齿(221)。</p>
                </li>
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    9.根据权利要求8所述的一种厨余垃圾处理器，其特征在于:
                  </h3>
                  <p class="_3fhsGtqy">所述的外刀盘(21)的圆周面形成有至少一圈水平刀齿(213)。</p>
                </li>
                <li class="Qbld1aUU">
                  <h3 class="_2YFhVJhr">
                    <img src="../assets/icon.svg" class="icon_style" alt />
                    10.根据权利要求8所述的一种厨余垃圾处理器，其特征在于:
                  </h3>
                  <p class="_3fhsGtqy">所述的内刀盘(22)上端面的中心区域成型有螺旋引导块(222)。</p>
                </li>
              </ul>
            </div>
          </div>
        </Skeleton>
      </Col>
      <Col span="2" />
    </Row>
    <div class="_2jOhcvE3">
      <Row>
        <Col span="2" />
        <Col span="20">
          <Skeleton :row="10" :loading="loading">
            <div class="_32kQkTI6">
              <div class="_3_64gso9">
                <div>
                  <h2 class="AoYQH9Lo">提供一种结构稳固，并且可适用于不同消费者 的耳塞式耳机</h2>
                  <p class="_6VN03hFk">
                    厨余垃圾由进料口进入料仓的腔体内，通过外刀盘和内刀盘的相对运
                    转将厨余垃圾粉碎后，并由出料口排出。
                  </p>
                </div>
                <div class="_3_64_img_box">
                  <img class="_3_64gso9_img" src="../assets/heng.jpeg" alt="jieshao" />
                </div>
              </div>
            </div>
          </Skeleton>
        </Col>
        <Col span="2" />
      </Row>
    </div>
    <div>
      <Row>
        <Col span="2" />
        <Col span="20">
          <Skeleton :row="10" :loading="loading">
            <div class="_1IViXJhn">
              <h2 class="_1iObbYY7">提供一种结构稳固，并且可适用于不同消费者 的耳塞式耳机</h2>
              <p class="_2KUuWHuN">
                1、料仓、安装在料仓内用于粉碎厨余垃圾的刀组、位于料仓外的驱动电机、以及连接驱动电机和刀组的传动组件，所述的料仓具有用于容置刀组的腔体，于料仓上开设有与腔体连通的进料口和出料口;
                <br />
                <br />2、所述的刀组包括同心设置的外刀盘和内刀盘，外刀盘和内刀盘相互叠加、并通过传动组件带动实现正反相对转动，所述的外刀盘和内刀盘的上端面分别成型有相互配合的刀齿;
                <br />
                <br />3、厨余垃圾由进料口进入料仓的腔体内，通过外刀盘和内刀盘的相对运转将厨余垃圾粉碎后，并由出料口排出。
              </p>
              <button class="_1JLvGqWK" type="button">产品图片</button>
              <div class="_2WXmqyp1">
                <div class="_1ziTzpRB">
                  <img class="_1VZClR0a" src="../assets/testImg1.jpeg" />
                </div>
                <div class="_1ziTzpRB">
                  <img class="_1VZClR0a" src="../assets/testImg2.jpeg" />
                </div>
                <div class="_1ziTzpRB">
                  <img class="_1VZClR0a" src="../assets/testImg3.jpeg" />
                </div>
              </div>
            </div>
          </Skeleton>
        </Col>
        <Col span="2" />
      </Row>
    </div>
    <Skeleton :row="10" :loading="loading">
      <div class="footer">
        <div>
          <a href>产品解释</a>
        </div>
        <div>
          <a href>产品服务</a>
        </div>
        <div>
          <a href>关于我们</a>
        </div>
        <div>
          <a href>帮助中心</a>
        </div>
      </div>
    </Skeleton>
  </div>
</template>

<script>
import { Skeleton, Col, Row } from "vant";
export default {
  name: "Home",
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  components: {
    Skeleton,
    Col,
    Row
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  color: #282828;
  .header_box {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  .header {
    display: flex;
    color: #282828;
    margin-top: 4rem;
    margin-bottom: 3rem;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      .logoImg {
        width: 6rem;
        display: inline-block;
      }
      .logo_svg_style {
        width: 8.6em;
        margin-left: -1.6em;
      }
    }

    nav {
      li {
        display: inline-block;
        margin-left: 1em;
        a {
          color: #282828;
          font-size: 0.9em;
          -webkit-transition: color 0.2s ease;
          -o-transition: color 0.2s ease;
          transition: color 0.2s ease;
          padding: 3px 0;
          margin-bottom: 0.1em;
          position: relative;
          display: inline-block;
          letter-spacing: 0.4rem;
        }
        a::before {
          transition: width 0.25s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
          background: #66cc33;
        }
        a::after {
          transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
          background: #282828;
        }
        a::after,
        a::before {
          content: "";
          position: absolute;
          top: calc(100% + 5px);
          width: 0;
          right: 0;
          height: 3px;
        }

        a:hover::after,
        a:hover::before {
          width: 100%;
          left: 0;
        }
        a.active:before {
          z-index: 2;
        }
        a.active:after {
          background: #282828;
          width: 100%;
          left: 0;
        }
      }
    }
  }
  .content {
    display: flex;
    color: #34495e;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .video_box {
      padding-top: 5em;
      .video {
        border-radius: 1em;
        width: 30em;
        width: 50em;
      }
      width: 50em;
      margin-bottom: 3em;
    }
    .text_info {
      h1 {
        font-size: 2.6em;
        font-weight: 500;
        text-shadow: 0.05em 0.1em 0px #898999;
        line-height: 1.6;
        margin-bottom: 1em;
        padding-top: 1em;
        letter-spacing: 0.5rem;
      }
      ._2e3H5v5s {
        margin-top: 1em;
        margin-bottom: 2em;
        letter-spacing: 0.5rem;
        ._36Bu1ZrV {
          font-size: 1em;
          line-height: 1.6;
          background-color: #282828;
          color: #fff;
          border-radius: 0.5em;
          padding: 0.4em 1em;
        }
      }
      ._2gwTVEC3 {
        font-size: 1em;
        line-height: 1.6;
        letter-spacing: 0.5rem;
      }
    }
  }
  ._2Ujv3m-Y {
    color: #34495e;
    padding-top: 4em;
    padding-bottom: 4em;
    .oIx3cEQy {
      color: #282828;
      letter-spacing: 0;
      font-size: 2.6em;
      line-height: 1.6;
      font-weight: 800;
      margin-bottom: 1em;
      padding-top: 1em;
      text-align: center;
      text-shadow: 0.06em 0.1em 0px #898999;
    }
    .ZFvTp8ys {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-grow: 1;
      align-items: flex-start;
      .Qbld1aUU {
        margin-bottom: 4em;
        ._2aYn7OZV {
          font-size: 2em;
          color: #282828;
          margin-right: 0.1em;
        }
        ._2YFhVJhr {
          color: #282828;
          font-size: 1.5em;
          line-height: 1.6;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: 0.1em;
          .icon_style {
            width: 3em;
          }
        }
        ._3fhsGtqy {
          font-size: 0.8em;
          margin-top: 10px;
          line-height: 1.6;
          color: #34495e;
          letter-spacing: 0.3em;
        }
      }
      .Qbld1aUU:last-child {
        margin-right: 0;
      }
    }
  }
  ._2jOhcvE3 {
    color: #34495e;
    background-color: #f9f9fb;
    ._3_64gso9 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      padding-top: 4em;
      padding-bottom: 3em;
      .AoYQH9Lo {
        font-size: 2em;
        font-weight: 800;
        line-height: 1.6;
        margin-right: 2rem;
        margin-bottom: 1rem;
      }
      ._6VN03hFk {
        line-height: 1.6;
        font-size: 1em;
        font-weight: 400;
        color: #7c7c7d;
        margin-right: 2rem;
      }
      ._3_64gso9_img {
        width: 20em;
        box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.4);
        border-radius: 0.6em;
        overflow: hidden;
      }
    }
  }
  ._1IViXJhn {
    text-align: center;
    ._1iObbYY7 {
      font-size: 3em;
      line-height: 1.6;
      font-weight: 800;
      padding-top: 2em;
      margin-bottom: 1em;
    }
    ._1JLvGqWK {
      line-height: 1.6;
      font-size: 1em;
      font-weight: 700;
      white-space: nowrap;
      outline: 0;
      border: none;
      border-radius: 0.6em;
      display: inline-block;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      background-color: #282828;
      color: #fff;
      padding: 0.6em 1.4em;
      margin-bottom: 2em;
    }
    ._2KUuWHuN {
      color: #7c7c7d;
      margin-bottom: 2em;
      text-align: left;
    }
    ._2WXmqyp1 {
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      justify-content: flex-start;
      width: 100%;
      align-items: stretch;
      ._1ziTzpRB {
        @media (min-width: 750px) {
          display: flex;
          flex-direction: column;
          flex-basis: 29%;
          margin-right: 3%;
        }
        margin-bottom: 4em;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        overflow: hidden;
        ._1VZClR0a {
          width: 100%;
        }
      }
      ._1ziTzpRB:nth-child(3n - 2) {
        @media (min-width: 750px) {
          margin-left: 2%;
        }
      }
      ._1ziTzpRB:nth-child(-n + 3) {
        @media (min-width: 750px) {
          margin-top: 0;
        }
      }
    }
  }
  .footer {
    color: #ffffff;
    padding: 3em 4em;
    background-color: #282828;
    display: flex;
    flex-wrap: wrap;
    div {
      flex-direction: column;
      flex-basis: 25%;
      text-align: center;
    }
  }
}
</style>
