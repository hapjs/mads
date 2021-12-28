# mads
一组能够避免小数精度丢失的加减乘除方法

### 使用场景：

在js中，对小数进行加减乘除时，很容易碰到精度丢失的问题，例如：

`0.1 + 0.2` 的结果是 `0.30000000000000004`

`0.3 - 0.2` 的结果是 `0.09999999999999998`

`0.1 * 0.2` 的结果是 `0.020000000000000004`

`0.3 / 0.2` 的结果是 `1.4999999999999998`

### 用法:

```js
import { add, sub, mul, div } from 'mads'

add(0.1, 0.2) // 0.3

sub(0.3, 0.2) // 0.1

mul(0.1, 0.2) // 0.02

div(0.3, 0.2) // 1.5
```

### 源码：

```js
// 求小数位数
function decpos (n) {
    n = (n + '').split('.')[1]
    return n ? n.length : 0
}

// 进行整数运算，避免出现小数运算可能丢失精度的问题
function cal (type, a, b) {
    var d = Math.max(decpos(a), decpos(b))
    var t = Math.pow(10, d)
    
    // 解决小数乘法中可能出现的丢失精度问题
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

```
