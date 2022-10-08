<template>
  <div>
    <el-button
      type="text"
      size="small"
      @click="dialogFormVisible = true"
    >修改</el-button>

    <el-dialog title="收货地址" :modal-append-to-body="false" :visible.sync="dialogFormVisible">
      <el-form :model="form">

        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.skuName" autocomplete="off" show-word-limit maxlength="15" />
        </el-form-item>

        <el-form-item label="品牌" :label-width="formLabelWidth">
          <el-input v-model="form.brandName" autocomplete="off" show-word-limit maxlength="15" />
        </el-form-item>

        <el-form-item label="商品价格" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.price"
            controls-position="right"
            class="num"
            :min="1"
            :step="0.50"
            @change="handleChange"
          />
        </el-form-item>

        <el-form-item label="商品类型" :label-width="formLabelWidth">
          <el-select v-model="form.classId" class="num" placeholder="请选择商品类型">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="规格" :label-width="formLabelWidth">
          <el-input v-model="form.unit" autocomplete="off" show-word-limit maxlength="10" />
        </el-form-item>

        <el-form-item label="商品图片" style="margin-left:50px">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus" />
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" src="form.skuImage" alt="">
          </el-dialog>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        skuName: '可口可乐',
        brandName: '可口可乐',
        price: '1.25',
        classId: '1',
        unit: '660ml',
        skuImage: 'http://lkd2-java.itheima.net/image/product1.png'
      },
      formLabelWidth: '120px',
      dialogVisible: false

    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style>
.num {
  width: 100%;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload__tip {
    margin-left: 70px;
    font-size: 14px;
    color: #bac0cd
  }
</style>
