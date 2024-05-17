const max3 = (x,y,z) => {
    if (x>y && x>z) {
        return x
    }
    if (y>x && y>z){
        return y
    }
    return z
}
console.log (max3(6,9,12))
console.log (max3(2,3,1))
console.log (max3(2,2,0))
console.log (max3(10,20,30))