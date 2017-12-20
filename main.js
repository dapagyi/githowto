var text = '';
for (var i=1; i<=1000; i++){
    if (i%4==0) text += i+', ';
}

function isPalindrom(x){
    var jegyek = (x.toString()).split('');
    //console.log(jegyek.length);
    var isPal=true;
    for (var j=0; j< jegyek.length; j++){
        //console.log(jegyek[j]+'?'+jegyek[jegyek.length-j-1]);
        if(jegyek[j] != jegyek[jegyek.length-j-1]){
            isPal=false;
        }
    }
    return isPal;
}

console.log(isPalindrom(66566));