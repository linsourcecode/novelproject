<template>

    <div class="my-table-wrapper">
    
      <table class="my-table">
        <thead>
          <tr>
            <th v-for="(item, index) in title" :key="index">{{item}}</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in userList" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.gender }}</td>
          </tr>
        </tbody>
      </table>
   
    </div>
  </template>




  
  <script>
 export default{
    name: 'MyTable',
    data() {
      return {  
        userList: [
          { name: '张三', age: 24, gender: '男' },
          { name: '李四', age: 30, gender: '女' },
          { name: '王五', age: 18, gender: '男' },
          { name: '王五', age: 19, gender: '男' },
          { name: '王五', age: 17, gender: '男' },
          { name: '王五', age: 16, gender: '男' },
          { name: '王五', age: 15, gender: '男' },
        
        ],
        title:["姓名","年龄","性别"]
      }},
  mounted(){
    setInterval(this.moveFirstRowToLast, 3000) // 每三秒钟调用移动第一行到最后方法
  },
  methods: {
    moveFirstRowToLast () {
      const firstRow = this.userList.shift() // 删除第一行
      this.userList.push(firstRow) // 将第一行添加至数组末尾
      console.log("调换数据")
    }
  }
      
    
    
    
    
    }
    
    
    
    
</script>
<style scoped>
.table-wrapper {
  height: 200px;
  overflow: auto;
}

.my-table {
 /* border-collapse: collapse;*/
  width: 100%;
}



.my-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  
  background-color: red;
}
table tbody {
    display: block;
    height: 195px;
    overflow-y: scroll;
}

table thead,
tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;/*重要  表格固定算法*/
}
.my-table th {
  
  color: #333;
  position: sticky;
}
</style>