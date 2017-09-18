<template>
  <div class="con">
  <div class="house-basic-info clearfix">
      <!-- 左边  轮播 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in houseDetail.images" :key="item">
          <img src=item class="main_imag" >
        </el-carousel-item>
      </el-carousel>
      <!-- 右边 价格 信息等 -->
      <div class="house-basic-right fr">
            <p class="house-basic-item1">
                <span class="price" v-if="houseDetail.totalPrice">{{houseDetail.totalPrice}}<b>万</b></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="price" v-if="houseDetail.rentPrice">{{houseDetail.rentPrice}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="unit" v-if="houseDetail.refPrice">{{houseDetail.refPrice}}元/平</span>
            </p>
            <div class="house-basic-item2">
                <p class="room">

                    <span class="main">{{houseDetail.houseType}}</span>
                    <span class="sub">{{houseDetail.floor}}</span>
                </p>
                <p class="area">
                    <span class="main">{{houseDetail.area}}平</span>
                    <span class="sub">{{houseDetail.decorate}}</span>
                </p>
                <p class="toward">
                    <span class="main">{{houseDetail.houseOrientation}}</span>
                    <span class="sub" v-if="houseDetail.buildYear">{{houseDetail.buildYear}}</span>
                </p>
            </div>
            <ul class="house-basic-item3">
               <!--  <li>
                    <span class="c_999">小区：</span>
                    <span class="c_000 mr_10">
                        <a class="c_000">杭州湾世纪城(滨海大道)</a>-
                        <a class="c_000">其他</a>
                    </span>
                </li> -->
                <li>
                    <span class="c_999">位置：</span>
                    <span class="c_000 mr_10">
                        <a class="c_000">{{houseDetail.addr}}</a>－
                    </span>
                </li>
            </ul>
           <!--  <div class="house-basic-item4">
                <p class="nav">
                    <span class="f14 c_333 jjrsay">我爱我家-曾灵强说</span>
                </p>
                <p class="c_999 lh22 jjr-desc">交通： 距离跨海大桥南岸高速口2公里、长途客运中心5分，钟、到高铁站25分，钟、到上海金山80公里、将近20路公交车、 开发区企业：方太、上海大众、吉利汽车、联合利华、美国库伯、美高梅、苹果、好孩子、雅戈尔、雅迪、妈咪宝、合生创展、中国移动信息产业园、德国博
                </p>
            </div> -->
      </div>
  </div>

  <!-- 概述 -->
   <div class="general-item general-situation">
        <h3><em></em>概况</h3>
        <div class="general-item-wrap clearfix">
            <ul class="general-item-left">
                <li v-if="houseDetail.totalPrice">
                  <span class="mr_25 c_999" >房屋总价</span>
                  <span class="c_000" >{{houseDetail.totalPrice}} 万</span>
                </li>
                <li v-if="houseDetail.rentPrice">
                  <span class="mr_25 c_999" >出租价格</span>
                  <span class="c_000">{{houseDetail.rentPrice}} 万</span>
                </li>
                <li>
                  <span class="mr_25 c_999">房屋户型</span>
                  <span class="c_000">{{houseDetail.houseType}}</span>
                </li>
                <li>
                  <span class="mr_25 c_999">房本面积</span>
                  <span class="c_000">{{houseDetail.area}}㎡</span>
                </li>
                <li>
                  <span class="mr_25 c_999">房屋朝向</span>
                  <span class="c_000">{{houseDetail.houseOrientation}}</span>
                </li>
            </ul>
            <ul class="general-item-right">
                <li>
                  <span class="mr_25 c_999">所在楼层</span>
                  <span class="c_000">{{houseDetail.floor}}</span>
                </li>
                <li>
                  <span class="mr_25 c_999">装修情况</span>
                  <span class="c_000">{{houseDetail.decorate}}</span>
                </li>
                <li v-if="houseDetail.rentMethod">
                  <span class="mr_25 c_999" >出租方式</span>
                  <span class="c_000" >{{houseDetail.rentMethod}}</span>
                </li>
                <li v-if="houseDetail.equityYear">
                  <span class="mr_25 c_999" >产权年限</span>
                  <span class="c_000" >{{houseDetail.equityYear}}</span>
                </li>
                <li v-if="houseDetail.buildYear">
                  <span class="mr_25 c_999" >建筑年代</span>
                  <span class="c_000">{{houseDetail.buildYear}}</span>
                </li>
            </ul>
        </div>
  </div>

  <!-- 描述 -->
  <div class="general-item general-desc" id="generalDesc">
        <h3><em></em>描述</h3>
        <div class="general-item-wrap">
            <div class="genaral-pic-desc">
                <p class="pic-desc-word">
                    <p class="pic-desc-word-content">
                      {{houseDetail.desc}}
                    </p>
                </p>
            </div>
        </div>
  </div>
  <!-- 描述结束 -->
</div>
</template>

<style>
#app{
  padding: 30px;
  margin: 0 auto;
  box-sizing: border-box;
}
.clearfix:after {
    content: "";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
}
.clearfix {
    zoom: 1;
}
/*左边 轮播*/
.el-carousel{
  /*width: 660px;*/
  width: 35%;
  height: 400px;
  float: left;
}
.el-carousel__container {
    position: relative;
    height: 400px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.main_imag {
  width: 490px;
  height: 400px;
}

.house-basic-info {
    margin-bottom: 40px;
}
/*右边相关信息*/
.house-basic-right {
    width: 60%;
    margin-left: 2%;
}
.fr {
    float: left;
}
.house-basic-item1 {
    margin-top: 26px;
    margin-bottom: 20px;
    padding-left: 20px;
}
.house-basic-item1 .price {
    display: inline-block;
    font-size: 38px;
    color: #f64b00;
}
.house-basic-item1 .price b {
    font-size: 16px;
    color: #f64b00;
}
.house-basic-item1 .unit {
    display: inline-block;
    font-size: 16px;
    color: #666;
}
.house-basic-item2 {
    width: 100%;
    overflow: hidden;
    padding-left: 20px;
}
.house-basic-item2 .room {
    float: left;
    width: 35%;
}
.house-basic-item2 .main {
    font-size: 22px;
    color: #000;
}
.house-basic-item2 span {
    display: block;
}
.house-basic-item2 .sub {
    font-size: 14px;
    color: #666;
    margin-top: 12px;
    margin-bottom: 20px;
}
.house-basic-item2 span {
    display: block;
}
.house-basic-item2 .area {
    float: left;
    width: 35%;
}
.house-basic-item3 {
    border-top: 1px solid #f3f3f3;
    padding: 12px 20px;
    margin: 0;
}
.house-basic-item3 li {
    font-size: 14px;
    line-height: 30px;
    overflow: hidden;
}
.house-basic-item3 span {
    display: inline-block;
}
.c_999 {
    color: #999;
}
.mr_10 {
    margin-right: 10px;
}
.c_000 {
    color: #000;
}
.house-basic-item4 {
    border-top: 1px solid #f3f3f3;
    padding: 10px 20px 0px 20px;
}
.house-basic-item4 .nav {
    margin-bottom: 8px;
    height: 32px;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: 0;
}
.house-basic-item4 .jjrsay {
    float: left;
    display: block;
    line-height: 32px;
}
.f14 {
    font-size: 14px;
}
.c_333 {
    color: #333;
}
.house-basic-item4 .jjr-desc {
    overflow: hidden;
    margin-top: 0;
}
.lh22 {
    line-height: 22px;
}

/*概况*/
.general-item {
    overflow: hidden;
    border-top: 1px solid #f3f3f3;
    font-size: 14px;
}
.general-item h3 {
    font-size: 22px;
    color: #000;
}
.general-item em {
    display: inline-block;
    opacity: .2;
    background: #ff552e;
    border-radius: 1px;
    width: 4px;
    height: 20px;
    margin-right: 14px;
    font-style: normal;
}
.general-situation .general-item-wrap {
    margin-top: 20px;
    margin-bottom: 49px;
}
.general-item-wrap {
    overflow: hidden;
    margin-left: 18px;
}
.general-item-left, .general-item-right {
    float: left;
    box-sizing: border-box;
}
.general-item-left {
    width: 40%;
}
.general-item-right {
    width: 60%;
}
.general-item-left li, .general-item-right li {
    line-height: 34px;
    height: 34px;
}
li, ol, ul {
    list-style: none;
}
.general-item-left span, .general-item-right span {
    float: left;
    display: block;
}
.mr_25 {
    margin-right: 25px;
}

/*描述*/
.general-desc .general-item-wrap {
    margin-top: 20px;
    margin-bottom: 49px;
}
.genaral-pic-desc {
    margin-bottom: 33px;
    overflow: hidden;
}

.general-item-wrap p {
    line-height: 28px;
    margin: 0;
}

</style>

<script>
   import { getFrontHouseDetail } from '../../api/api';

export default {
   methods: {
      get_data () {
       var params = { houseId: this.$route.params.houseId };
            getFrontHouseDetail(params).then((res) => {
                      console.log(res);
                      if (res.status !== 200) {
                        this.$message({
                          message: res.msg,
                          type: 'error'
                        });
                      } else {
                        this.houseDetail = res.data.data
                      }
                    });
        }
    },
  data() {
    return {
          houseDetail: {
                    title:'',
                    name: '',
                    totalPrice:'',
                    refPrice:'',
                    area: '',
                    tradingRight:'',
                    houseType:'',
                    houseOrientation:'',
                    floor:'',
                    decorate:'',
                    equityYear:'',
                    buildYear:'',
                    addr: '',
                    phone: '',
                    desc: '',
                    images: [],
                    rentPrice: '',
                    rentMethod: '',
                }
    };
  },
   created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.get_data()
    console.log(this.$route.params)
  },

}
</script>