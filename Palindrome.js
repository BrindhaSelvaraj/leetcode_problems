var isPalindrome = function(x) {
    const val = String(x);
   if(x<0) 
        return false;
  
    const temp = val.split('').reverse().join("");
    return temp ===  val;

};
