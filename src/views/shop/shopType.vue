<template>
  <div class="dashboard-container" style="width: 1450px">
    <div>
      <span class="text">商品类型搜索:</span>
      <el-input
        class="input"
        placeholder="请输入"
        clearable
      />

      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>

    <addShopType @zdsx="qqsj" />

    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          fixed
          prop="date"
          type="index"
          label="序号"
          width="200"
        />
        <el-table-column
          prop="className"
          label="商品类型名称"
          width="1000"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="200"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="delshopType(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getSkuClass, delSkuClass } from '@/api/shop'
import addShopType from './components/addShopType.vue'
export default {
  components: {
    addShopType
  },
  data() {
    return {
      tableData: [{ className: '' }
      ],
      index: 0
    }
  },
  created() {
    this.qqsj()
  },
  methods: {
    handleClick(row) {
      console.log(row)
    },
    async qqsj() {
      const { data: { currentPageRecords }} = await getSkuClass()
      this.tableData = currentPageRecords
    },
    async delshopType(row) {
      this.tableData.map((item, index) => {
        this.index = index
      })
      try {
        const { data } = await delSkuClass(row.classId)
        if (data === true) {
          // this.$nextTick(() => {
          //   this.tableData.splice(row, 1)
          // })
          this.tableData.splice(row, 1)
        }
        this.qqsj()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="less">
.text {
  font-size: 14px;
  color: #606266;
}
.input {
  width: 209px;
  height: 36px;
  margin-right: 10px;
  margin-left: 10px;
}
.newBtn{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 80px!important;
    height: 36px;
    padding: 0;
    background: linear-gradient(135deg,#ff9743,#ff5e20)!important;
    border: none;
    color: #fff !important;
    font-size: 16px;
    margin-top: 50px;
    margin-bottom: 40px;
}
</style>
