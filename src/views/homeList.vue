
 <template>
 <el-row>
    <listcomponent 
      v-for="(item, index) in items"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:message="item"
     ></listcomponent>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400" class="paginator">
    </el-pagination>
  </div>
</el-row>

</template>
<style>
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
 import listcomponent from '../component/listcomponent.vue'
export default {
   methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
          currentPage4: 4

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