<template>
    <div class="dashboard-container">
      <el-form  >
        <el-form-item label="标题" label-width="80px">
        <input type="text" v-model="queryinfo.title">
      </el-form-item>
      <el-form-item label="系列" label-width="80px">
        <input type="text" v-model="queryinfo.series">
      </el-form-item>
      <el-form-item label="类型" label-width="80px">
      <input type="text" v-model="queryinfo.type">
      </el-form-item>
      </el-form>
    
      <br>
      <mavon-editor
        v-model="queryinfo.content"
        :toolbars="toolbars"
        @save="save"
      />
    </div>
  </template>
<script>
import qs from 'qs'
export default {
  name: 'MyArticle',
  data() {
    return {
      queryinfo:{
        title:'',
        series:'',
        type:'',
        content: '',
      },
      // 输入的数据
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
    }
  },
  mounted() {},
  methods: {
   async  save(){
    console.log()
   // const {data:res} = await this.$http.post("getUserInfo/pagination", qs.stringify(this.queryInfo))
    this.queryinfo.content=this.queryinfo.content.replace(/\n/g, "<br/>");
    const {data:res} = await this.$http.post("data", qs.stringify(this.queryinfo))
    alert(res)
    }
  }
}
</script>
<style>
 .el-form-item {
  display: inline-block !important;
  margin-right: 10px;
}

</style>
  