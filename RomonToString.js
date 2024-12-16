var romanToInt = function(s) {
    const romanmap ={
        "I"   :    1,
        V     :    5,
        X     :    10,
        L     :    50,
        C     :    100,
        D     :    500,
        M     :    1000
    };
    let total = 0;
    for(let i=0;i<s.length;i++){
        const val1 = romanmap[s[i]];
         const val2 = romanmap[s[i+1]];
         if(val2 > val1){
            total -= val1;
         }
         else{
            total += val1
         }
    }
    return total;
    
};
