var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function patternPic(abc){
    
    for ( i = 0; i <abc.length; i++){
        var str=" ";
        str += abc[i];
        for (j = i; j > 0; j--){
            str +=' ' + abc[i];
        }
        var str2 ='  <'
        for (k = 27 - i; k > 0; k--){
            str2 +="--";
        }
        var res = (str + str2).slice(0, -1);
        console.log(res+'> : ' + (i+1));
    }
}
patternPic(abc);