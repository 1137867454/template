import api from './api'
import axios from 'axios';
import {Message, MessageBox} from 'element-ui'
const fx = {
  getDate (d) {
    console.log('getDate....')
    if (typeof d === 'string') {
      d = new Date(d)
    }
    let day = d.getDate()/10 < 1 ? '0' + d.getDate() : d.getDate();
    d = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + day;
    // d = '' + d.getFullYear() + (d.getMonth() + 1) + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
    return d 
  },
  setConnect ( payload ) {
    console.log('发送请求到:' + payload.url)
    let Authorization = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
      api({
        url: payload.url,
        method: payload.methods ? payload.methods : 'get',
        headers: {
          'Authorization': Authorization
        },
        data: payload.data
      }).then(res => {
        console.log(res)
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  number_Chinese(number) {
    let arr = [0,1,2,3,4,5,6,7];
    let brr = ['日', '一', '二', '三', '四', '五', '六', '天']
    return brr[arr.indexOf(number)];
  },
  getWeather(that) {
    axios.get("https://free-api.heweather.com/v5/weather?key=5a08956dc52c43eca4ee75d77db964c8&city=zhanjiang")
    .then( res => {
      console.log(res);
      that.weather = res.data.HeWeather5[0];
      console.log(that.weather)
    }).catch( err => {
      console.log(err);
    })
  },
  // 浏览器全屏与半全屏展示
  fullScreen() {
    let doc = document.documentElement;
    // W3C
    if(doc.requestFullScreen) {
      doc.requestFellScreen();
    }else if(doc.webkitRequestFullScreen) {
      doc.webkitRequestFullScreen();
    }
  },
  fileHandle(file) {
    const formData = new FormData();
    let upload_file = file.file;
    formData.append('file', upload_file);
    return formData;
  },
  deleteOne () {
    return new Promise((resolve) => {
      MessageBox.confirm('此操作将永久删除该文件，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
        }).then(() => {
          resolve(true)
      }).catch(() =>{

      })
    })
  },
  deleteWarning(item) {
      return new Promise((resolve, reject) => {
        if(item && item.length){
          MessageBox.confirm('此操作将批量删除信息，是否继续？', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error',
          center: true
          }).then(() => {
            resolve(1);
          }).catch(() => {
    
          })
        }else{
          Message({
            message: '请选中至少一条数据',
            type: 'error',
            duration: 1500
          })
        }
      })
  }
}
export default fx
