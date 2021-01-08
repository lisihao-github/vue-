
import { initMixin } from './init'

function Vue(options) {
    // 进行 Vue 的初始化操作
    this._init(options)

}


initMixin(Vue)
export default Vue