<!-- <template>
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
import Minio from 'minio'

// 创建 MinIO 客户端对象
const minioClient = new Minio.Client({
  endPoint: 't1',
  port: 9000,
  useSSL: false,
  accessKey: 'admin',
  secretKey: 'admin123'
})

// 上传文件到 MinIO
async function uploadFile (file) {
  try {
    // 生成上传路径
    const objectName = `uploads/${file.name}`

    // 执行上传操作
    await minioClient.putObject('BUCKET_NAME', objectName, file.path)

    // 返回上传后的文件信息
    return {
      name: file.name,
      url: `https://MINIO_ENDPOINT:9000/BUCKET_NAME/${objectName}`
    }
  } catch (err) {
    console.error(err)
    throw new Error('Failed to upload file to MinIO')
  }
}



</script> -->
