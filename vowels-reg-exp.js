function vowelsRegEx(str){
  // so our regular expression is going to have a pair of square braces when put in square pair bracs like this where essentially saying hey if this string contains any character that is inside of the square brackets right here then let us know 
  //add two other option (g,i) 
  //g : it make sure that we don't stop at the first match that we find inside of string 
  // - i :stands for insensitive or case insensitive
  let matches = str.match(/[aeiou]/gi)
  //console.log(matches)
  return  matches ?matches.length:0
}


module.exports=vowelsRegEx