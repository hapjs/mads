function decpos (n) {
    n = (n + '').split('.')[1]
    return n ? n.length : 0
}

function cal (type, a, b) {
    var d = Math.max(decpos(a), decpos(b))
    var t = Math.pow(10, d)
    
    a = (a * t) | 0
    b = (b * t) | 0

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
