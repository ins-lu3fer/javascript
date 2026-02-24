/* console.log("l");
console.log("u");
console.log("c");
console.log("i"); */

function sayMyName(){
 console.log("l");
console.log("u");
console.log("c");
console.log("i");
}

//sayMyName()

/* function addTwoNumbers(number1,number2){ //number is paramaters
    console.log(number1 + number2);
} */


function addTwoNumbers(number1,number2){ 
    //let result = number1 + number2
    //return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

//addTwoNumbers(10,null) //10,null is argunment

//console.log("Result :" , result);


function loginUserMessage (username = "luci"){
    if(!username){
       console.log("please enter a username");
       return
    }
    return `${username} just logged in`
}

//console.log((loginUserMessage("luci")));
console.log(loginUserMessage("vivek"))
