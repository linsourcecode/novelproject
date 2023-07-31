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
      value:"", // value的值是要解析的markdown数据
      article:"",
      series:""
      
    }
  },
  created(){
   
  },
  watch:{
	$route(to,from){
    const articleName = this.$route.query.article;
     this.article = articleName
     const series = this.$route.query.series;
     this.series = series;
            
    
     this.loadData()
	}
}
,
  methods:{
    async   loadData(){
      console.log("请求数据")
      const {data:res } = await this.$http.get("getDetail", {
        params:{
            series:this.series,
            title:this.article
        }})
        this.value= res[0].data
        console.log(this.value)

     }
    
  }
}



</script>