function Steps(n){
 for(let i=0;i<n;i++){
   let stair=' '
   for(let j=0;j<n;j++){
     if(i===j || i>j){
      stair+='#'
     }else{
      stair+=' '
       
     }
   }
   console.log(stair)
 } 
}

module.exports=Steps