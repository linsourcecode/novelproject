<template>
    <div>
      <el-upload
        class="avatar-uploader"
        action="#"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"  
        :http-request="upload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon" />
      </el-upload>
    </div>
  </template>
  
  <script>
  const COS = require('cos-js-sdk-v5')
// 填写自己腾讯云cos中的key和id (密钥)
    const cos = new COS({
    SecretId: 'AKIDe9UcjdLvNpLqEVjrnVzQp5HKIIFD8sPf', // 身份识别ID
    SecretKey: '8218EIExZ1FGE1ldN1d7NVQMLG3sWuaD' // 身份秘钥
    })

  export default {
    data() {
      return {
        imageUrl: ''
      }
    },
    methods: {
        upload(res) {
  if (res.file) {
    // 执行上传操作
    cos.putObject({
      Bucket: 'wx-1308374424', /* 存储桶 */
      Region: 'ap-guangzhou', /* 存储桶所在地域，必须字段 */
      Key: res.file.name, /* 文件名 */
      StorageClass: 'STANDARD', // 上传模式, 标准模式
      Body: res.file, // 上传文件对象
      onProgress: (progressData) => { // 上传进度
        console.log(JSON.stringify(progressData))
      }
    }, (err, data) => {
      //console.log(err || data)
      // 上传成功之后
      if (data.statusCode === 200) {
        this.imageUrl = `https:${data.Location}`
        console.log(this.imageUrl)
      }
    })
  }
},

      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload(file) {
        const isPNG = file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isPNG) {
          this.$message.error('上传头像图片只能是 PNG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isPNG && isLt2M
      }
    }
  }
  </script>
  
  <style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
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
  </style>
  