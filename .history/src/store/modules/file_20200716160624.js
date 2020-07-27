import { asyncRouterMap } from '../../router/asyncRouterMap'
import router from '../../router/index'
// import fx from '../../util/fx'
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
    // 上传图片 post /media/uploadImage

  }
}
export default file
