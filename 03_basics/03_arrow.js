const user = {
    username: "luci",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to website`)
        console.log(this);
        
    }
    
}

/*  user.welcomeMessage()
user.username="sam"
user.welcomeMessage()  */

//console.log(this);

/* function chai(){
    let username = "luci"
    console.log(this.username);
}

chai() */


/* const chai = function(){
    let username = "luci"
    console.log(this.username);
} */


    const chai = () => {  //arrow function
        let username = "luci"
        console.log(this.username);
        
    }

   // chai()

//const addTwo = (num1,num2) =>{
  //  return num1 + num2   //explicit return
//}

//const addTwo = (num1,num2) =>  num1 + num2  //implict return
 
//const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username : "luci"})
console.log(addTwo(4,5))


//const myArray = [2,3,4,1,6,8]

//myArray.function