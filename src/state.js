import { observe } from './observer/index'


// 在原型上添加一个 init 方法
export function initState(vm) {
    const opts = vm.$options

    // vue 的数据来源 属性 方法 数据 计算属性 watch
    if (opts.props) {
        initProps(vm)
    }

    if (opts.methods) {
        initMethod(vm)
    }

    if (opts.data) {
        initData(vm)
    }

    if (opts.computed) {
        initComputed(vm)
    }

    if (opts.watch) {
        initWatch(vm)
    }

}

function initProps() { }
function initMethod() { }
function initData(vm) {
    let data = vm.$options.data   // 用户传递的 data 数据
    data = vm._data = typeof data === 'function' ? data.call(vm) : data

    // 对象劫持 用户改变了数据 我希望可以得到通知 => 刷新页面
    // MVVM模式 数据变化可以驱动视图变化
    // Object.defineProperty() 给属性增加 get 方法 和 set 方法
    observe(data)
    
}
function initComputed() { }
function initWatch() { }