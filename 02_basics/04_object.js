//const tinderUser = new Object() //singleton object
const tinderUser = {} //non sigleton object


tinderUser.id = "123abc"
tinderUser.name = "luci"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname :{
        userfullname :{
            firstname : "luci",
            lastname : "choudhary"
        }
    }
}
 //console.log(regularUser.fullname.userfullname.firstname);
 
 const obj1 = {1:"a",2:"b"}
 const obj2 = {3:"a",4:"b"}
 const obj4 = {5:"a,", 6:"b"}
 //const obj3 = Object.assign({},obj1,obj2,obj4)

 const obj3 = {...obj1,...obj2}
 //console.log(obj3);
 

 //console.log(tinderUser.hasOwnProperty('isLogged'));


 const course = {
    coursename: "valo in hindi",
    price : "999",
    courseInstructor: "luci"
 }

 //console.log(course.courseInstructor);

 const {courseInstructor : instructor} = course //destructure
 console.log(instructor);

 {
    "name": "luci",
    "coursename ": "valo in hindi",
   " price " : "free"
   //json
 }

[
    {}
    {}

]

