<template>
<div>
    <el-container class="homeContainer">
    <el-header>
        <div>
            
            <span>黑马后台管理系统</span>
            
        </div>
     
        <div>
            <el-button type="info" @click="logout">退出</el-button>
        </div>
       
    </el-header>
   

 <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']"  router >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        
         
          <el-menu-item index="/DataRecord">选项1</el-menu-item>
          <el-menu-item index="/meanType">选项2</el-menu-item>
       
       
          <el-menu-item index="/myRecord">选项3</el-menu-item>
       
      
       
   
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
      
          <el-menu-item index="/showData">文章阅读</el-menu-item>
          <el-menu-item index="/upLoad">文件上传</el-menu-item>
   
       
          <el-menu-item index="/myTitle">书架</el-menu-item>
   
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
     
          
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
       
       
        <el-menu-item index="3-3">选项3</el-menu-item>
        <el-menu-item index="3-4">选项四</el-menu-item>
      
      </el-submenu>
    </el-menu>
  </el-aside>
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

        }

    },
     methods:{
        logout(){

        }
     }
}
</script>

<style scoped>
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