function isPalindrom(x){
    var jegyek = (x.toString()).split('');
    var isPal=true;
    for (var j=0; j< jegyek.length; j++){
        if(jegyek[j] != jegyek[jegyek.length-j-1]){
            isPal=false;
        }
    }
    return isPal;
}