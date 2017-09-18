<template>
  <div class="content_div" v-on:click="detail">
      <!-- <img src="src/assets/pic-pd-3.png" class="main_imag"> -->
      <div class="desc_div house-list-wrap ">
        <div class="clearfix">
                <div class="pic">
                  <a href="javascript:;" target="_blank">
                    <img src=imageUrl style="display: inline;" width="147px" height="110px">
                  </a>
                </div>
                <div class="list-info">
                    <h2 class="title">
                        <a href="javascript:;" onclick="" target="_blank">{{houseInfo.title}} </a>
                    </h2>
                    <p class="baseinfo">
                        <span>{{houseInfo.houseType}}</span>
                        <span>{{houseInfo.area}}㎡&nbsp;</span>
                        <span>{{houseInfo.houseOrientation}}</span>
                        <span>{{houseInfo.floor}}</span>
                        <span>{{houseInfo.decorate}}</span>
                    </p>
                    <p class="baseinfo">
                        <span>
                            <a href="javascript:;" target="_blank">{{houseInfo.addr}}</a>
                        </span>
                    </p>
                    <div class="jjrinfo">
                        鼎盛房地产
                        <!-- <a href="javascript:;" class="listjjr">
                            <span class="jjrname-outer">宛梅</span>
                            <div class="jjrtip" style="display: none;">
                                <img src="http://img.58cdn.com.cn/ui9/house/list/list_jjr.png" alt="经纪人图像" class="logo" />
                                    <p class="jjrName">
                                        <span class="jjrName_span">宛梅</span>
                                      <span class="wlt">
                                          <em class="wltico"></em>4年
                                      </span>
                                    </p>
                                    <p class="jjrrenz">
                                        煦柘房地产
                                        <br>
                                        58同城认证商家
                                    </p>
                                    <span class="tipArrow"></span>
                            </div>
                        </a> -->
                    </div>
                </div>
                <div class="price">
                    <p class="sum" v-if="houseInfo.rentPrice">
                        <b>{{houseInfo.rentPrice}}</b></p>
                    <p class="sum" v-if="houseInfo.totalPrice">
                        <b>{{houseInfo.totalPrice}}</b>万</p>
                    <p class="unit" v-if="houseInfo.refPrice">{{houseInfo.refPrice}} + "/㎡"</p>
                    <p class="unit" v-if="houseInfo.rentMethod">{{houseInfo.rentMethod}}</p>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        imageUrl: this.houseInfo.images[0],
        houseId: this.houseInfo.id
    }

  },
  props: ['houseInfo'],
  methods: {
    detail: function (event) {
      this.$router.push({ path: '/detail/' + this.houseId });
    }
  }
}
</script>

<style>
a {
    text-decoration: none;
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
.content_div {
    display: -webkit-flex;
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 20px;
}
.desc_div {
    -webkit-flex: 1;
    flex: 1;
}
.main_imag {
    width: 200px;
    height: 200px;
    margin-right: 20px;
}
.content-warp {
    width: 1190px;
    margin: 0 auto;
}
.house-list-wrap {
    color: #777;
}
.house-list-wrap li {
    position: relative;
    border-bottom: 1px solid #f3f3f3;
    padding: 30px 0;
}
.house-list-wrap .pic {
    float: left;
    position: relative;
    width: 147px;
    height: 110px;
}
.house-list-wrap .picNum {
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px 8px;
    color: #fff;
    background: #000;
    filter: alpha(opacity=50);
    -moz-opacity: .5;
    opacity: .5;
}
.list-info {
    float: left;
    width: 662px;
    margin-left: 20px;
}
.list-info .title {
    font-size: 0;
    margin-bottom: 15px;
}
.list-info .title a {
    color: #333;
    font-size: 20px;
}
.house-list-wrap li.hove .title a {
    color: #ff552e;
}
.list-info .title a, .list-info .title i {
    vertical-align: middle;
}
.list-info .baseinfo {
    margin-bottom: 13px;
    line-height: 14px;
}
.list-info .baseinfo span {
    margin-right: 14px;
}
.list-info .baseinfo a {
    color: #777;
}
.house-list-wrap .price .sum b {
    font-size: 30px;
    margin-right: 6px;
}
.list-info .jjrinfo {
    margin-bottom: 14px;
    line-height: 14px;
}
.house-list-wrap .price {
    position: absolute;
    right: 100px;
}
.house-list-wrap .price .sum {
    color: #ff552e;
    margin-bottom: 8px;
}
.house-list-wrap .price .unit {
    text-align: right;
}
.paginator{
  margin-top: 20px;
}
/*分页*/

</style>
