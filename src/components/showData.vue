<template>
  <VueMarkdown :source="value"></VueMarkdown>

</template>
<script>
import VueMarkdown from 'vue-markdown'


export default {
  components: {
    VueMarkdown // 注入组件
  },
  data () {
    return { 
      value:"" // value的值是要解析的markdown数据
    }
  },
  created(){
    
     this.loadData()
  },
  methods:{
    async   loadData(){
      const {data:res } = await this.$http.get("getData")
      console.log(res[0]["data"])
      this.value= res[1]["data"]

     }
    
  }
}



</script>