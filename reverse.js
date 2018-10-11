function reversed(a) {
  let tab=''
  debugger
  for (i of a){
    tab=i+tab
  }
  return tab
}
module.exports = reversed;