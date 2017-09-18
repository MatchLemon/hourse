
 <template>
  <div class="list-body">

    <el-row>
      <div class="list-title">
         <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="出租房源" name="first"></el-tab-pane>
          <el-tab-pane label="二手房源" name="second"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="list-content">

      </div>
      <listcomponent
        v-for="(item, index) in items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:message="item"
        v-bind:houseId=101
        class="list-item" >

      </listcomponent>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40" class="paginator">
        </el-pagination>
      </div>
    </el-row>
  </div>

</template>
<style>
  .list-body {
    width: 80%;
    margin: 0 auto;
  }
  .list-body .list-item {
    background: #f1f1f1;
    margin-top: 5px;
    border-radius: 8px;
    border: 1px solid #d8d8d8;

  }
  .list-body .list-item:hover {
    box-shadow: 3px 2px 10px #888888;
  }
  .list-title {
    position: fixed;
    background: #ffffff;
    display: block;
    width: 80%;
    z-index: 1000;
  }
  .list-content {
    margin-top: 57px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .paginator {
      display: -webkit-flex;
      display:         flex;
      -webkit-align-items: center;
              align-items: center;
      -webkit-justify-content: center;
              justify-content: center;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>

<script>
 import listcomponent from '../../component/listcomponent.vue'
export default {
   methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val
        console.log(this.currentPage);
      },
      handleClick(tab, event) {
        this.houseType = tab.index
        console.log(tab.index, event);
      },
      get_data (params) {
      if (!params) params = {}
      this.$api.get('topics', params, r => {
        this.lists = r.data
      })
    }
    },
  data() {
    return {
          items: ["src/assets/pic-pd-3.png","skjgh","adasd","萨德安分","年语法二维","的HIA月让饿哦儒雅我诶发"],
          currentPage: 4,
          activeName: 'first',
          houseType: 1
    };
  },
  components: {listcomponent},
   created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    // this.get_data()
  }
}
</script>