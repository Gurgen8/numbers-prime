// function-sqr

var res = "*";
var space = "&nbsp";
var br = "<br />";

function sqr(n){

for(var i=1;i<=n; i++){
    for(var k=1;k<=(n-i);k++){
        document.write(space+space)
    }
    for(var j=1;j<=i;j++){
        document.write(res)
    }
    for(j=2;j<=i;j++){
        document.write(res)
    }
    document.write(br)
}
for(i=n-1;i>=1; i--){
    for(k=1;k<=(n-i);k++){
        document.write(space+space)
    }
    for(j=1;j<=i;j++){
        document.write(res)
    }
    for(j=2;j<=i;j++){
        document.write(res)
    }
    document.write(br)
}


}





// function _ patern

function patern (rows,cols){
     for(var a = 0; a<=rows; a++){


    for (b=0 ; b<=a ;b++){
        document.write(space+space)
    }

    for(var c = 0; c <= cols ; c++)
    {


  
        document.write(res+space);
    
    }
  
 
    document.write(br)

}

document.write(br+br+br)
}





// primitive-numbers-getPrimes


function getPrimes(x,y){

     var y;
prime: for (var x; x<= y; x++) {
   if(x === 0 || x === 1){
      continue;
   }
   for (var i = 2; i <= x; i++) {
      if(x % i  === 0 && x !== i){
         continue prime;
      }
   }
 document.write(x+br)
}
}





// primitive-numbers-inPrimes


function isPrime(n){
    if(n<2){
        return false
    }
 
    var sqrt = (Math.sqrt(n))///modules
    for (var i=2; i<=sqrt; i++){
        if(n%i===0){
            return false;
        }
    }

    return true
}




