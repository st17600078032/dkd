<template>
  <div class="dashboard-container" style="width: 1450px">
    <div>
      <span class="text">策略搜索:</span>
      <el-input
        v-model="input"
        class="input"
        placeholder="请输入内容"
        clearable
      />

      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>

    <div>
      <el-button
        icon="el-icon-circle-plus-outline"
        class="newBtn"
        type="danger"
      >新建</el-button>
    </div>

    <div class="table">
      <el-table
        border:false
        :data="tableData[0]"
        style="width: 100%"
        height="800px"
      >
        <el-table-column
          fixed
          prop="policyId"
          label="序号"
          width="80"
        />
        <el-table-column
          prop="policyName"
          label="策略名称"
          width="459"
        />
        <el-table-column
          prop="discount"
          label="策略方案"
          width="458"
        />
        <el-table-column
          prop="createTime"
          label="创建日期"
          width="160"
        />
        <el-table-column
          prop="address"
          label="操作"
          width="200"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看详情</el-button>
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getVms } from '@/api/strategy'

export default {
  name: 'Dashboard',
  data() {
    return {
      input: '',
      tableData: []
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  async created() {
    try {
      const { data } = await getVms()
      this.tableData.push(data)
      console.log(this.tableData)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>

    <style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

    <style>
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

.newBtn {
  margin-top: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 80px !important;
  height: 36px;
  padding: 0;
  background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
  border: none;
}
.table {
  margin-top: 20px;
  width: 1400px;
  height: 100%;
background-color: red;
}
</style>

