function Capital(str){
  let words=[]
  let transformStr=str.split(' ')
  for(let i of transformStr){
    words.push(i[0].toUpperCase()+i.slice(1))
  }
  return words.join(' ')
}

module.exports=Capital