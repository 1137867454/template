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
    
  },
  actions: {
    

  }
}
export default attendence
