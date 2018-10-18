function chunk(array,size){
  let chunked=[]
  let index=0
  while(index<array.length){
    chunked.push(array.slice(index,index+size))
    index+=size
  }
 return 'chunked array',chunked
}

module.exports=chunk