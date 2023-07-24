<template>
  
    
 
<div class="table-wrapper">
  <div class="table-group">
    <div class="table-column">
   
      <div class="table-scroll">
        <MyTable class="my-table">
          <!-- 表格内容省略 -->
        </MyTable>
      </div>
    </div>
    <div class="table-column">
      <div class="table-scroll">
        <MyTable class="my-table">
          <!-- 表格内容省略 -->
        </MyTable>
      </div>
    </div>
    <div class="table-column">
      <div class="table-scroll">
        <MyTable class="my-table">
          <!-- 表格内容省略 -->
        </MyTable>
      </div>
    </div>
  </div>
</div>
 
  
  </template>
<script>
import MyTable  from  './datatable.vue'
export default({
   name:"dataV",
   components:{
    MyTable
   }




})




</script>
<style scoped>

.table-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

.table-group {
  display: flex;
  flex-direction: row;
}

.table-column {
  width: 300px;
  margin-right: 10px;
}

.table-scroll {
  height: 200px;
 
}

.my-table {
 /* border-collapse: collapse;*/
  width: 100%;
}


.my-table th,
.my-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.my-table th {
  background-color: #f2f2f2;
  color: #333;
 
}

</style>