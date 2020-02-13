let a = 0
let b = 1
while (a < 100) {
    console.log(a)
    tmp = a
    a = b
    b = tmp + b
}
