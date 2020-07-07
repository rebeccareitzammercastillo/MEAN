// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.
function bracesValid(str){
    open=0
    close=0
    for(var i=0; i<str.length; i++){
        if (str[i]=='(' || str[i]=='[' || str[i]=='{'){
            open+=1
            // console.log(open)
        }
        if (str[i]==')' || str[i] == ']' || str[i]=='}'){
            close+=1
            // console.log(close)
        }
    }
    if (open==close){
        return true
    }
    else{
        return false
    }

}

console.log(bracesValid("{{()}}[]"))