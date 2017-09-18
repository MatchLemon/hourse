
 <template>

  <!-- <div class="list-body"> -->

    <el-row>
      <div>
         <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="出租房源" name="first"></el-tab-pane>
          <el-tab-pane label="二手房源" name="second"></el-tab-pane>
        </el-tabs>
      </div>
     <!--  <div class="list-content">

      </div> -->
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
  <!-- </div> -->

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
          getFrontHouseList(params).then(data1 => {
                    console.log(data1);
                    let { msg, code, data } = data1;
                    if (code !== 200) {
                      this.houseList = []
                      this.$message({
                        message: msg,
                        type: 'error'
                      });
                    } else {
                         this.houseList = data.hourses;
                        this.totalCount = data.totalCount;
                    }
                  });
      }
    },
  data() {
    return {
          houseList: [
        {
            "title": "123456",
            "name": "哈哈",
            "houseType": "三户型",
            "houseOrientation": "chaonan",
            "floor": "13",
            "decorate": "精装",
            "area": "118",
            "addr": "中原区航海东路",
            "phone": "13456780987",
            "status": "1",
            "isPublic": "1",
            "desc": "急用钱",
            "type": "1",
            "id": "59be1c405257cb07f4997050",
            "rentPrice": "1100",
            "rentMethod": "整租",
            "images": [
                "https://img.wowdsgn.com/page/banners/1a18d4d1-f599-4d00-8d2d-c7c0e33b6d72_2dimension_1248x828.jpg",
                "https://img.wowdsgn.com/page/banners/1a18d4d1-f599-4d00-8d2d-c7c0e33b6d72_2dimension_1248x828.jpg"
            ]
        },
        {
 
            "title": "123456",
            "name": "哈哈",
            "houseType": "三户型",
            "houseOrientation": "chaonan",
            "floor": "13",
            "decorate": "精装",
            "area": "118",
            "addr": "中原区航海东路",
            "phone": "13456780987",
            "status": "1",
            "isPublic": "1",
            "desc": "急用钱",
            "type": "1",
            "id": "59be190b5257cb63a88cf856",
            "rentPrice": "1100",
            "rentMethod": "整租",
            "images": [
                "http://img.wowdsgn.com/page/banners/1a18d4d1-f599-4d00-8d2d-c7c0e33b6d72_2dimension_1248x828.jpg",
                "http://img.wowdsgn.com/page/banners/1a18d4d1-f599-4d00-8d2d-c7c0e33b6d72_2dimension_1248x828.jpg"
            ]
        }
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
    // this.get_data()
  }
}
</script>