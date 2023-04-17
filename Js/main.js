/* let a = +prompt("istalgan sonni kirirting :::")
let summ = 0
let summ2 =1
for(let i = 1; i<a; i++){
    if (i % 2 === 0){
        summ+=i
    }
    else{
        summ2*=i
    }
    
}
console.log(summ);
console.log(summ2);
 */


let a = +prompt('istalgan sonni kiriting ::')

let summ = 0
for(let i = a; i>0; i=Math.floor(i/10)){
    summ += (i % 10)
}
console.log(summ);