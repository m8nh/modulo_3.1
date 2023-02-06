function counDown (P,S,callback){
    let x = setInter () ;{
        console.log(`${P} ${S}`);
        S --;
        if ( S < 0){
            S = 59;
            P --; if ( P < 0){clearInterval(X), callback();}}
        } timeout: 1000
    }
    
function setTimeout() {
    console.log('setTimeout');
    counDown(0,5)
}


