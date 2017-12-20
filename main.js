function isPalindrom(x){
    var jegyek = (x.toString()).split('');
    for (var j=0; j< jegyek.length; j++){
        if(jegyek[j] != jegyek[jegyek.length-j-1]){
            return false;
        }
    }
    return true;
}

function change(x){
    var jegyek = x.toString().split('');
    var jegyekSz = ['nulla','egy','kettő','három','négy','öt','hat','hét','nyolc','kilenc'];
    var ret = '';
    for (var j=0; j<jegyek.length; j++){
        ret += jegyekSz[jegyek[j]];
    }
    return ret;
}

for (var j=1; j<=1000000; j++){
    if (j%7 == 0 && isPalindrom(j))  console.log(change(j));
}