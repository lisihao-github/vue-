
import { isObject } from '../util/index'

import { arrayMethods } from './array.js'

class Observer {

    constructor(value) {
        // value.__ob__ = this;

        Object.defineProperty(value, '__ob__', {
            enumerable: false,
            configurable: false,
            value: this
        })
        if (Array.isArray(value)) {
            // 数组
            value.__proto__ = arrayMethods
            this.observerArray(value)
        } else {
            // 对象
            this.walk(value)
        }
    }

    walk(data) {
        Object.keys(data).forEach(key => {
            defineReactive(data, key, data[key])
        })
    }

    observerArray(value) {
        for (let i = 0; i < value.length; i++) {
            observe(value[i])
        }
    }
}


function defineReactive(data, key, value) {
    observe(value)
    Object.defineProperty(data, key, {
        get() {
            return value
        },
        set(newValue) {
            observe(newValue)
            if (value === newValue) return
            value = newValue
        }
    })
}


export function observe(data) {
    if (!isObject(data)) return
    return new Observer(data)
}