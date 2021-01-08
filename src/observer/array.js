
let oldArrayMethods = Array.prototype

export const arrayMethods = Object.create(oldArrayMethods)

const methods = [
    'push',
    'shift',
    'onshift',
    'pop',
    'reverse',
    'sort',
    'splice'
]

methods.forEach(methods => {
    arrayMethods[methods] = function (...args) {
        console.log(args)

        console.log('用户调用了 push 方法')
        const result = oldArrayMethods[methods].apply(this, args)
        let inserted;
        let ob =this.__ob__
        switch (methods) {
            case 'push':
            case 'unshift':
                inserted = args
                break;
            case 'splice':
                inserted = args.slice(2)
            default:
                break;
        }
        if(inserted) ob.observerArray(inserted)

        return result
    }
})