<template>
  <div>
    <div class="sheet">
      <h1>sheet1</h1>
      <!-- TODO -->
      <table></table>
    </div>
    <div class="sheet">
      <h1>sheet2</h1>
      <table>
        <tr v-for="(td, td_index) in aoa" :key="td_index">
          <td v-for="(txt, txt_index) in td" :key="txt_index" v-text="txt"></td>
        </tr>
      </table>
    </div>
    <el-button @click="exportTable">导出表格</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aoa: [
        ['A', 'B', 'C', 'D', 'E'],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0]
      ]
    };
  },
  methods: {
    exportTable() {
      const worksheet1 = window.XLSX.utils.aoa_to_sheet(this.aoa);
      const worksheet2 = window.XLSX.utils.aoa_to_sheet(this.aoa);
      // 设置样式
      worksheet1['A1'].s = {
        font: {
          sz: 16,
          bold: true,
          color: { rgb: 'ff0000' }
        },
        alignment: {
          horizontal: 'center',
          vertical: 'center'
        }
      };
      // 合并单元格
      worksheet1['!merges'] = [{
        s: { c: 0, r: 0 },
        e: { c: 4, r: 0 }
      }];
      // 导出
      const workbook = {
        SheetNames: ['sheet1', 'sheet2'],
        Sheets: {
          sheet1: worksheet1,
          sheet2: worksheet2
        }
      };
      return window.XLSX.writeFile(workbook, 'test.xlsx');
    }
  },
  mounted() {
    window.console.log(window.XLSX);
  }
};
</script>

<style lang="less" scoped>
.sheet {
  padding-bottom: 20px;
  h1 {
    padding-bottom: 10px;
  }
  td {
    border: 1px #000 solid;
    width: 100px;
    padding: 10px;
  }
}
</style>