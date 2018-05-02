const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));
const discrim= b * b - 4 * a * c;

function quadrEq(a,b,c) {
    if (discrim > 0) {
         
        const x1 = (-b + Math.sqrt(discrim)) / 2 * a;
        const x2 = (-b - Math.sqrt(discrim)) / 2 * a;
        return 'x1:' + x1 + '<br>' + 'x2:' + x2;
    }
    else if (discrim === 0) {
        const x = -(b / 2 * a);
        return 'x:' + x;
    }
    else if (discrim < 0) {
        return 'No solution equation';
    }
}
document.write(quadrEq(a,b,c));
