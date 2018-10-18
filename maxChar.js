function charMax(str){
  let obj={}
  max=0
  maxC=''
  for (let i of str){
    if(!obj[i]){
      obj[i]=1
    }else{
      obj[i]++
    }
  }
  for (let c in obj){
    console.log(obj[c])
    if(obj[c]>max){
      max=c
      Char=obj[c]
    }
  }
  console.log('max Char = ',max )
  console.log('max = ',Char)
}

module.exports=charMax