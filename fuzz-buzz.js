function fizzBuzz(n){
  if(n<0){
    n=Math.sign(n)*(-1)
  }
if(n%3 ===0){
  return 'fuzz'
}else if(n%5===0){
  return 'Buzz'
}else{
  return 'fizzBuzz'
}
}

module.exports=fizzBuzz


// fizzBuzz mean that a number u enter if is modulo 3 or 5 

// modulo is the rest of the divide ecludiene