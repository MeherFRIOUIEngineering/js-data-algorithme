function chunkWithSplice(array,size){
  let chunked=[] 
  while(array.length){
    chunked.push(array.splice(0,size))
  }
 return 'chunked array',chunked
}

module.exports=chunkWithSplice