import { getItem } from "../util/token"

import {getItem} from '../util/token'
 const getters = {
    getRouter: (state) => state.asyncRouterMap,
    getUser: (state) => state.user,
    getBreadList: (state) => state.breadList,
    getTheme: (state) => {
      if( getItem('theme') ) {
        return getItem;
      }else{
        return state.theme;
      }
    }
    // get_activeIndex: (state) => state.activeIndex
  }
  export default getters