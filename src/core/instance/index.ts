import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
import type { GlobalAPI } from 'types/global-api'

// 执行new Vue(options)
function Vue(options) {
  if (__DEV__ && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // initMixin中的_init方法
  this._init(options)
}

//@ts-expect-error Vue has function type
// 定义_init方法
initMixin(Vue)
//@ts-expect-error Vue has function type
// 定义 $set $get $delete $watch
stateMixin(Vue)
//@ts-expect-error Vue has function type
// 定义 $on $once $off $emit
eventsMixin(Vue)
//@ts-expect-error Vue has function type
// 定义 _update $forceUpdate $destroy
lifecycleMixin(Vue)
//@ts-expect-error Vue has function type
// 定义 nextTick render函数返回虚拟dom 
renderMixin(Vue)

export default Vue as unknown as GlobalAPI
