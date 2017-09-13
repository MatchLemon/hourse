<template>
  <div class="content_div" v-on:click="detail">
      <!-- <img src="src/assets/pic-pd-3.png" class="main_imag"> -->
      <div class="desc_div house-list-wrap ">
        <div class="clearfix">
                <div class="pic">
                  <a href="javascript:;" target="_blank">
                    <img src="https://pic1.ajkimg.com/display/aifang/bf4a9ccb39e707ce3de7e0f53a514508/133x100c.jpg" style="display: inline;">
                  </a>
                </div>
                <div class="list-info">
                    <h2 class="title">
                        <a href="javascript:;" onclick="" target="_blank">22号线旁二房出售 高性价比 周围配套齐全 适合 </a>
                    </h2>
                    <p class="baseinfo">
                        <span>2室1厅1卫</span>
                        <span>57.0㎡&nbsp;</span>
                        <span>南</span>
                        <span>低层(共6层)</span>
                    </p>
                    <p class="baseinfo">
                        <span>
                            <a href="javascript:;" target="_blank">临潮二村</a>－
                            <a href="javascript:;" target="_blank">金山</a>－
                            <a>隆安路99号</a>
                        </span>
                    </p>
                    <div class="jjrinfo">
                        煦柘房地产－
                        <a href="javascript:;" class="listjjr">
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
                        </a>
                    </div>
                </div>
                <div class="price">
                    <p class="sum">
                        <b>88</b>万</p>
                    <p class="unit">15438元/㎡</p>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }

  },
  props: ['message'],
  methods: {
    detail: function (event) {
      this.$router.push({ path: '/detail' });
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
