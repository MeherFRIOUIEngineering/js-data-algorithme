function vowels(str){
  let counter=0
  //let checker='aeiou'
  let checker=['a','e','i','o','u']
  for(let i of str.toLowerCase()){
    if(checker.includes(i)){
      counter++
    }
  }
  return counter
}

module.exports=vowels