import fx from '../../utils/fx'
import api from '../../utils/api'
import { setItem, getItem, removeItem } from '../../utils/token'

const file = {
  state: {

  },
  getters: {
    get_activeIndex: state => state.activeIndex
  },
  mutations: {
    set_router ({ state, rootstate }) {
      // console.log('addRouter')
      router.addRoutes(asyncRouterMap_)
    }
  },
  actions: {
    // 上传文件 post /media/upload
    uploadFile({state}, data) {
        let url = ''
    }
    // 上传图片 post /media/uploadImage

  }
}
export default file
