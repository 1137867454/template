import fx from '../../utils/fx'
import api from '../../utils/api'
import { setItem, getItem, removeItem } from '../../utils/token'
import { resolve } from 'core-js/fn/promise'

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
        return new Promise((resolve, reject) => {
            let url = '/media/upload';
            let methods = 'post';
            fx.setConnect({url, methods, data})
            .then(res => {
                resolve(res.data.data);
            }).catch(() => {
                
            })
        })
    }
    // 上传图片 post /media/uploadImage

  }
}
export default file
