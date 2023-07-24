<template>
    <div   class="scroll-container"      style="height: 400px; overflow-y: auto;">
      <!-- <el-select v-model="value" placeholder="请选择" @change="handleChange" append-to-body>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select> -->
  
    <el-table
        :data="tableData"
        style="width: 100%"
       
       >
        <el-table-column
          prop="date"
          label="年龄"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="关系">
        </el-table-column>
        <el-table-column
          prop="address"
          label="weight">
        </el-table-column>
        <el-table-column
          prop="address"
          label="bra">
        </el-table-column>
        <el-table-column
          prop="address"
          label="pre">
        </el-table-column>
        <el-table-column label="操作">
    
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      
        </el-table-column>
  </el-table>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value: '',
          tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
        
      },
    methods: {
        handleChange() {
        console.log(this.value);
        },
        mounted() {
  const container = document.querySelector('.table-container');
  const header = container.querySelector('.el-table__header-wrapper');
  const body = container.querySelector('.el-table__body-wrapper');
  container.addEventListener('scroll', () => {
    header.scrollLeft = container.scrollLeft;
    body.scrollTop = container.scrollTop;
  });
}
  },


    }
  </script>
<style>
.el-select{
  margin-bottom: 20px;

}
.el-dialog__title h1,
.el-collapse-item__header h1 {
  font-size: 20px;
  font-weight: normal;
  font-family: "Microsoft YaHei"
}


</style>