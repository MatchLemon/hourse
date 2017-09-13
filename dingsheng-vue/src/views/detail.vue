<template>
  <div class="con">
  <div class="house-basic-info clearfix">
      <!-- 左边  轮播 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="https://pic1.ajkimg.com/display/aifang/bf4a9ccb39e707ce3de7e0f53a514508/133x100c.jpg" class="main_imag" >
        </el-carousel-item>
      </el-carousel>
      <!-- 右边 价格 信息等 -->
      <div class="house-basic-right fr">
            <p class="house-basic-item1">
                <span class="price">42<b>万</b></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="unit">8750 元/平</span>
            </p>
            <div class="house-basic-item2">
                <p class="room">
                    <span class="main">1室1厅1卫</span>
                    <span class="sub">中层/共21层</span>
                </p>
                <p class="area">
                    <span class="main">48平</span>
                    <span class="sub">精装修</span>
                </p>
                <p class="toward">
                    <span class="main">南北</span>
                    <span class="sub">2016年建</span>
                </p>
            </div>
            <ul class="house-basic-item3">
                <li>
                    <span class="c_999">小区：</span>
                    <span class="c_000 mr_10">
                        <a class="c_000">杭州湾世纪城(滨海大道)</a>-
                        <a class="c_000">其他</a>
                    </span>
                </li>
                <li>
                    <span class="c_999">位置：</span>
                    <span class="c_000 mr_10">
                        <a class="c_000">上海周边</a>－
                        <a class="c_000">滨海大道,近金源大道</a>
                    </span>
                </li>
            </ul>
            <div class="house-basic-item4">
                <p class="nav">
                    <span class="f14 c_333 jjrsay">我爱我家-曾灵强说</span>
                </p>
                <p class="c_999 lh22 jjr-desc">交通： 距离跨海大桥南岸高速口2公里、长途客运中心5分，钟、到高铁站25分，钟、到上海金山80公里、将近20路公交车、 开发区企业：方太、上海大众、吉利汽车、联合利华、美国库伯、美高梅、苹果、好孩子、雅戈尔、雅迪、妈咪宝、合生创展、中国移动信息产业园、德国博
                </p>
            </div>
      </div>
  </div>

  <!-- 概述 -->
   <div class="general-item general-situation">
        <h3><em></em>概况</h3>
        <div class="general-item-wrap clearfix">
            <ul class="general-item-left">
                <li>
                  <span class="mr_25 c_999">房屋总价</span>
                  <span class="c_000">42万(单价 8750元/㎡)</span>
                </li>
                <li>
                  <span class="mr_25 c_999">房屋户型</span>
                  <span class="c_000">1室1厅1卫</span>
                </li>
                <li>
                  <span class="mr_25 c_999">房本面积</span>
                  <span class="c_000">48㎡</span>
                </li>
                <li>
                  <span class="mr_25 c_999">房屋朝向</span>
                  <span class="c_000">南北</span>
                </li>
            </ul>
            <ul class="general-item-right">
                <li>
                  <span class="mr_25 c_999">所在楼层</span>
                  <span class="c_000">中层/共21层</span>
                </li>
                <li>
                  <span class="mr_25 c_999">装修情况</span>
                  <span class="c_000">精装修</span>
                </li>
                <li>
                  <span class="mr_25 c_999">产权年限</span>
                  <span class="c_000">70年</span>
                </li>
                <li>
                  <span class="mr_25 c_999">建筑年代</span>
                  <span class="c_000">2016年</span>
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
                      <br> 距离跨海大桥南岸高速口2公里、长途客运中心5分，钟、到高铁站25分，钟、到上海金山80公里、将近20路公交车、
                      <br> 开发区企业：方太、上海大众、吉利汽车、联合利华、美国库伯、美高梅、苹果、好孩子、雅戈尔、雅迪、妈咪宝、合生创展、中国移动信息产业园、德国博世、中信集团等
                      <br> 88平月租金1800-2000
                      <br> 商业配套：均已运营
                      <br> 1、30万金源世纪购物中心、24万的风情商业街
                      <br> 2、永辉超大超市、肯德基、必胜客、星巴克、沃美影城、苏宁易购等
                      <br> 3、8万五星mdash;金源世纪和宁波杭州湾海底温泉娱乐会所，6万的世纪金源写字楼
                      <br> 医疗教育一应俱全：
                      <br> 8万平米三甲医院：宁波二院杭州湾医院、慈溪市第七人民医
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
  width: 100%;
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