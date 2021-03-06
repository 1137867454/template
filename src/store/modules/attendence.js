// 考勤管理导出excel
import fx from '../../utils/fx'
import api from '../../utils/api'
import { setItem, getItem, removeItem } from '../../utils/token'

const attendence = {
  state: {
    attendanceList: {}    //考勤列表
  },
  getters: {
    get_AttendanceList: state => state.attendanceList,
  },
  mutations: {
    set_GetAttendanceList: (state, data) => state.attendanceList = data,
  },
  actions: {
    /**
     * 考勤管理
    */
    //  考勤记录删除 post /delCheckingIn
    deleteAttendance({dispatch}, data) {
      let url = `/delCheckingIn`;
      let methods = 'post';
      fx.setConnect({url, methods, data})
      .then(res => {
        // 删除成功的回调，需要重新查一遍考勤列表证明删除成功
        dispatch('getAttendanceList')
      }).catch(err => {

      })
    },
    //  考勤记录修改 post /updCheckingIn
    updateAttendance({dispatch}, data) {
      let url = `/updCheckingIn`;
      let methods = 'post';
      fx.setConnect({url, methods, data})
      .then(res => {
        dispatch('getAttendanceList')
      }).catch(err => {
        
      })
    },
     //  考勤图表
     getECharts({state, dispatch}, page) {
      return new Promise( (resolve, reject) => {
      if(page) {
        // 保留page属性，添加、修改、删除之后依然保留当前页不变
        state.page = page;
      }else{
        // 复查时（修改、删除、添加时），不需要再传page属性了，直接回调使用即可。
        page = state.page;
      }
        let url = `/getECharts?startTime=${page.startTime}&endTime=${page.endTime}`;
        fx.setConnect({url})
        .then(res => {
         resolve(res)
        }).catch(err => {
          
        })
      })
    },
    //  考勤查询 get /getCheckingInPage
    getAttendanceList({state, commit}, page) {
      if(page) {
        // 保留page属性，添加、修改、删除之后依然保留当前页不变
        state.page = page;
      }else{
        // 复查时（修改、删除、添加时），不需要再传page属性了，直接回调使用即可。
        page = state.page;
      }
      // ``模板字符串下${}，可以直接使用js语法。
      let url = `/getCheckingInPage?pageSize=${page.pageSize}`
      +`&pageNum=${page.currentPage}&name=${page.name}`
      +`&departmentName=${page.departmentName}`
      +`&corporationName=${page.corporationName}`
      +`&startTime=${page.startTime}&endTime=${page.endTime}`;
      fx.setConnect({url})
      .then(res => {
        page.total = res.data.data.total * 1;
        console.log(res.data.data)
        // 同步设置考勤列表
        commit('set_GetAttendanceList', res.data.data)
      }).catch(err => {
        
      })
    },
    // 考勤记录导出(excel下载) post /getEquipmentExport
    downloadExcel({state}, page) {
      return new Promise((resolve, reject) => {
<<<<<<< HEAD
        let url = `http://47.100.92.182:8080/getEquipmentExport`;
=======
        let url = `http://192.168.1.238/getEquipmentExport`;
>>>>>>> b4691a98fa0d531a173e9b94b6abe1c0032ad58f
        // 获取Token
        let token = getItem('token');
        // 为什么不使用fx.setConnect
        // 后台只传了stauts码，没有传code码，会导致axios报错
        axios({
          url: url,
          method: 'post',
          data: page,
          headers: {
            Authorization: token,
            // "Content-Type": "application/vnd.ms-excel"
            // 'Content-Type': 'application/x-www-form-urlencoded'
          },
          // 重中之重：将后台响应的文件数据转为blob格式
          responseType: "blob"
        })
        .then(res => {
            console.log(res);
            console.log('导出成功');
            // 截取文件名，这里是后端返回了文件名+后缀，如果没有可以自己拼接
            let fileName = '考勤表.xlsx';
            // 将`blob`对象转化成一个可访问的`url`
            let url = window.URL.createObjectURL(new Blob([res.data],));
            // js创造一个a标签
            let link = document.createElement('a');
            // 不可见
            link.style.display = 'none';
            link.href = url;
            // 为该a标签添加属性download，置顶下载文件的名称和格式
            link.setAttribute('download', fileName);
            // 将a标签放入body中
            document.body.appendChild(link);
            // 模拟点击，跳出保存栏
            link.click();
            // 清除该a标签
            document.body.removeChild(link);
            resolve();
          // let blob = res.data;
        //   let blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
        //   console.log(blob)
        //   let fileName = 'example.xlsx';
        //   if ('download' in document.createElement('a')) {  // 非IE下载
        //     let link = document.createElement('a');
        //     link.download = fileName;
        //     link.style.display = 'none';
        //     link.href = URL.createObjectURL(blob);
        //     console.log(URL.createObjectURL(blob))
        //     console.log(link)
        //     console.log(link.href)
        //     document.body.appendChild(link);
        //     link.click();
        //     URL.revokeObjectURL(link.href) ; // 释放URL 对象
        //     document.body.removeChild(link);
        // } else {  // IE10+下载
        //     navigator.msSaveBlob(blob);
        // }
        })
        // // let methods = 'post';
        // fx.setConnect({ url })
        // .then(res => {
        //   resolve(res.data.data);
        //   console.log('jkjkjkjkjkjkjkjkjkj');
        // }).catch(err => {
        //   console.log('..................................')
        //   console.log(err);
        //   reject(err);
        // })
        // api({
        //   url: url,
        //   data: page,
        //   headers: {
        //     Authorization: token
        //   },
        //   responseType: "blob"
        // }).then(res => {
        //   console.log('success')
        //   console.log(res.data)
        // }).catch(err => {
        //   console.log('defeat')
        //   console.log(err)
        //   reject(err)
        // })
      })
    }

  }
}
export default attendence
