function myInstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while(true) {
    if(left === null || left === void 0) {
      return false
    }
    if(left === prototype) {
      return true
    }
    left = left.__proto__
  }
}