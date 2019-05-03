<template>
  <v-chart :options="polar"></v-chart>
</template>

<script>
export default {
  data() {
    const data = [];
    for (let i = 0; i <= 360; i++) {
      const t = i / 180 * Math.PI;
      data.push([Math.sin(2 * t) * Math.cos(2 * t), i]);
    }
    return {
      polar: {
        polar: {
          center: ['50%', '50%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          showSymbol: false,
          data: data
        }],
        animationDuration: 2000
      }
    };
  }
};
</script>

<style lang="less" scoped>
.echarts {
  height: 400px;
  width: 400px;
}
</style>