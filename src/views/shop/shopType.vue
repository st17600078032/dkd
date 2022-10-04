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

    <div>
      <el-button type="text" icon="el-icon-circle-plus-outline" class="newBtn">新建</el-button>
    </div>

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
          prop="name"
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
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
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
