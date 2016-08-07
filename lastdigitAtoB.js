function lastdigitAtoB(a,b){
  var result= Math.pow(a, b);
  var lastone = result.toString().split('').pop();
  return lastone;
}

console.log(lastdigitAtoB(237,124));
