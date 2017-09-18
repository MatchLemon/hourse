
 <template>
    <el-row>
      <div>
         <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="出租房源" name="first"></el-tab-pane>
          <el-tab-pane label="二手房源" name="second"></el-tab-pane>
        </el-tabs>
      </div>
      <listcomponent
        v-for="(item, index) in houseList"
        v-bind:item="item"
        v-bind:index="index"
       v-bind:houseInfo="item"
        class="list-item" >

      </listcomponent>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size=pageSize
          layout="total, sizes, prev, pager, next, jumper"
          :total=totalCount class="paginator">
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
 import listcomponent from '../../component/listcomponent.vue'
   import { getFrontHouseList } from '../../api/api';

export default {
   methods: {
      handleSizeChange(val) {
        this.pageSize = val
        this.get_data()
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val
        this.get_data()
        console.log(this.currentPage);
      },
      handleClick(tab, event) {
        this.houseType = tab.index
        this.get_data()
        console.log(tab.index, event);
      },
      get_data () {
       var params = { typeId: this.houseType,
                  pageNumber: this.currentPage - 1,
                   pageSize: this.pageSize };
          getFrontHouseList(params).then((res) => {
                    console.log(res);
                    if (res.status !== 200) {
                      this.houseList = []
                      this.$message({
                        message: res.msg,
                        type: 'error'
                      });
                    } else {
                         this.houseList = res.data.data.hourses;
                        this.totalCount = res.data.data.totalCount;
                    }
                  });
      }
    },
  data() {
    return {
          houseList: [
        
    ],
          currentPage: 1,
          pageSize: 10,
          activeName: 'first',
          houseType: 1,
          totalCount: 0
    };
  },
  components: {listcomponent},
   created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.get_data()
  }
}
</script>