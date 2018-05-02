function quadrEq(){
    

const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));
const discrim = b * b - 4 * a * c;
   
    if (discrim < 0) {
        document.write('no solution');
    }
    else if (discrim === 0) {
       const x = -(b / 2 * a);
        document.write('x:' + x);
    }
    else if(discrim > 0) {
       const x1 = (-b + Math.sqrt(discrim())) / 2 * a;
       const x2 = (-b - Math.sqrt(discrim())) / 2 * a;
        document.write('x1:' + x1 + '<br>');
        document.write('x2:' + x2);
    }
}