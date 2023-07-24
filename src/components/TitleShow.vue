<template>
 <div class="container">
  <el-row :gutter="24">
    <el-col :span="4" v-for="(o, index) in value"  style="height: 33%;"   >
      <el-card :body-style="{ padding: '0px' }" class="my-card">
        <img :src="o.description" class="image" alt="My Image" @click="handleClick(o.article_name)">
        <div style="padding: 14px;">
          <span>{{value[index]["series_name"] }}</span>
          <div class="bottom clearfix">
             <p  style="color: red;font-size: 14px;">{{value[index]["tags"] }}</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
 </div>



</template>
  

  
  <script>
  export default {
    data() {
      return {
        currentDate: new Date(),
        value:[],
        url:''
      };
    },
    created(){
    
    this.loadData()
    },
    methods:{
    async   loadData(){
      const {data:res } = await this.$http.get("title/title")
      this.value = res;
     
    

      // const {data:ress} = await this.$http.get("iamge/myInfo")
      // this.url=ress["data"];
    
      

     },
     handleClick(item) {
      this.$router.push({path:'word',
      query:{
        userid:item
      }
     })
      }
      
    
    
  }
 
  }
  </script>
<style>
img {
  height: 200px;
}
container{
     width: 100%;
}
span {
  font-size: 12px;
}
el-row{
  width: 100%;
}

   .el-card{
       margin-bottom: 24px;

   }
    .time {
      font-size: 13px;
      color: #999;
    }
    
    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }
  
    .button {
      padding: 0;
      float: right;
    }
  
    .image {
      width: 100%;
      display: block;
    }
  
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
  </style>