function f() {
    this.data = 1
}

function f2() {

}

f2.prototype.data = 2

const ff = new f()
const dd = new f2()
console.log(ff)
console.log(dd)

function f3() {

}

f3.prototype = new f2()

const zz = new f3()

console.log(zz.data)
