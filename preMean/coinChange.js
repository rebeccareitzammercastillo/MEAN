var arr=[];
function coinChange(cents){
    dollar= cents/100
        arr += 'dollars: '+ Math.floor(dollar)
    cents= cents % 100
    q= cents/25
        arr += ' quarters: '+ Math.floor(q)
    cents= cents %25
    d= cents/10
        arr += ' dimes: '+ Math.floor(d)
    cents= cents %10
    n= cents/5
        arr += ' nickels: '+ Math.floor(n)
    cents= cents %5
    arr += ' pennies: '+ cents
    return arr
}
console.log(coinChange(401))