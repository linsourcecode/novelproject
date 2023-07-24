<template>
    <div>
        <el-container class="homeContainer">
        <el-header>
            <div>
                
                <span>黑马后台管理系统</span>
                
            </div>
         
            <div>
                <el-button type="info" >退出</el-button>
            </div>
           
        </el-header>
       
        <div class="aside">
     <el-container height="100%">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)" >
        <el-menu :default-openeds="['1', '3']"  router >
          <el-submenu index="1"  active-text-color="#409Eff">
            <template slot="title " ><i class="el-icon-message"></i>目录</template>
            
             
              <el-menu-item v-for="(o, i) in value" ><span>{{value[i]["article_name"]}}</span></el-menu-item>
             
           </el-submenu>
      
       
  
        </el-menu>
      </el-aside>
    </el-container>
    </div>
      <el-main>
              <router-view></router-view>
      </el-main>
     </el-container>
    </el-container>
    </div>
    
    </template>
    <script>
    export default {
        data(){
            return {
                series:"",
                value:[]
    
            }
    
        },
        created(){
            
             this.series = this.$route.query.userid
             this.load()
        },
         methods:{
            
           async  load(){
                
      const {data:res } = await this.$http.get("title/series", {
        params:{
            series:this.series
        }


      })
      this.value= res
      console.log(res)

   
     


     
            }
         }
    }
    </script>
    
    <style scoped>

.aside {
    width: 200px;
    background-color: #0080c9;
    overflow: hidden;
 }
.el-aside {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
 }

 .el-aside {
height:100vh;
}
    .homeContainer{
    height: 100%;
    }
    
    .el-header{
        background-color: #2E3336;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 20px;
       
    
    
    }
    .el-header div{
        display: flex;
        align-items: center;
       
    
    }
    .el-header div span{
        margin-left: 10px;
    }
    </style>