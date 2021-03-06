// 求小数位数
function decpos (n) {
    n = (n + '').split('.')[1]
    return n ? n.length : 0
}

// 进行整数运算，避免出现小数运算可能丢失精度的问题
function cal (type, a, b) {
    var d = Math.max(decpos(a), decpos(b))
    var t = Math.pow(10, d)
    
    // 先把参与运算的数转换成整数
    // toFixed(0) 解决小数乘法中可能出现的丢失精度问题
    a = +(a * t).toFixed(0)
    b = +(b * t).toFixed(0)

    switch (type) {
        case 'add':
            return (a + b) / t
        case 'sub':
            return (a - b) / t
        case 'mul':
            return (a * b) / (t * t)
        case 'div':
            return a / b
    }
}

export const add = function (a, b) { return cal('add', a, b) }
export const sub = function (a, b) { return cal('sub', a, b) }
export const mul = function (a, b) { return cal('mul', a, b) }
export const div = function (a, b) { return cal('div', a, b) }
