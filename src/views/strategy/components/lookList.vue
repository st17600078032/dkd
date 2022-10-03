<template>
  <span>
    <el-button class="button" type="text" @click="tcxq">查看详情</el-button>

    <el-dialog title="策略详情" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="序号" width="150" />
        <el-table-column property="name" label="点位名称" width="200" />
        <el-table-column property="address" label="设备编号" />
      </el-table>
    </el-dialog>
  </span>
</template>

<script>
import { vmPolicy } from '@/api/strategy'
export default {
  props: {
    xqsj: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      index: 0
    }
  },
  methods: {
    async tcxq() {
      this.dialogTableVisible = true
      console.log(this.xqsj)
      this.xqsj.forEach((item, index, arr) => {
        this.index = index
      })
      try {
        const res = await vmPolicy(this.xqsj[this.index].policyId)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="less">
    .button {
        font-size: 12px;
    }

</style>
