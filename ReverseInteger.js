var reverse = function(x) {
    let number=Math.abs(x);
    let rev = 0;
    while (number != 0){
       
        const rem=number % 10;
        rev = rev * 10 + rem;
        // console.log(rev);
        number = Math.floor(number / 10); ; 
    }
    rev = x < 0 ? -rev : rev;
    return rev;
};
