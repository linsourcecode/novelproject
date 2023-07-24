<template>
    <div class="chart-container" ref="chart"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts'
  
  export default {
    data() {
      return {
        chart: null
      };
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
      this.destroyChart();
    },
    methods: {
      initChart() {
        // 创建图表实例
        this.chart = echarts.init(this.$refs.chart);
  
        // 设置图表配置项并渲染图表
        this.chart.setOption({
          title: {
            text: "示例图表"
          },
          legend: {
            data: ['柱1', '柱2','折線3']
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            },
            {
              name: "成本",
              type: "bar",
              data: [4, 12, 26, 10, 10, 10]
            },
            {
              name: "銷售額",
              type: "line",
              data: [4, 12, 26, 10, 10, 10]
            },
            
          ]
        });
      },
      destroyChart() {
        // 销毁图表实例
        if (this.chart) {
          this.chart.dispose();
          this.chart = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    height: 400px;
  }
  </style>
  