// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number
// Validate the user input. If the function is not passed a positive number, either throw an error or return null.
function fizzbuzz(n) {
    if (n<0){
        console.log('This is not a positive number.')
    }
    else if(Number.isInteger(n)==false){
        console.log('This is not a number.')
    }
    for (var i = 1; i < n+1; i++){
        if (i % 15 == 0){
            console.log('FizzBuzz')
        }
        else if (i % 3==0){
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}
fizzbuzz(15)

// Rather than have the function log each element, return a nicely formatted string with all the elements. Include commas where appropriate to make it easier to read.
var str ="";
function fizzbuzz(n) {
    if (n<0){
        console.log('This is not a positive number.')
    }
    else if(Number.isInteger(n)==false){
        console.log('This is not a number.')
    }
    for (var i = 1; i < n+1; i++){
        if (i % 15 == 0){
            str+=('and FizzBuzz.')
        }
        else if (i % 3==0){
            str+=(" Fizz, ")
        }
        else if (i % 5 == 0) {
            str+=(" Buzz, ")
        }
        else{
            str+= i+", "
        }
    }
    return str
}
fizzbuzz(15)
console.log(str)