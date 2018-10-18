


function palandrome  (str){
  let p=false
  arrayChar=str.split('')
  for(let i of arrayChar){
    if(arrayChar[i] === arrayChar[arrayChar.length-i-1]){
      p=true
    }
  }
  if(p===true){
    return 'Palandrome'
  }else{
    return 'Not Plandrome'
  }
}

module.exports =palandrome