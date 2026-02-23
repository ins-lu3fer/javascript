//singleton

//object literals
//Object.create

const mySym = Symbol("key1")

const JsUser={
    name: "Vivek",
    "full name": "Vivek kumar",
    age : 18,
    location : "Bihar",
    email : "luci@google.com",
   [mySym]:"myKey1",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
    
}

/* console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym]); */

JsUser.email = "vivek@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "lucimatkr@gogle.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTWO = function(){
    console.log(`Hello js user , ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTWO());




