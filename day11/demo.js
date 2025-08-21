
//nestered function 
   //the function called inside of the another function is called a nested function
// let a=()=>{
//     console.log("this the function");
//     let b=()=>{
//         console.log("this a b function");
//     }
//     b()
//     console.log("this exra function");
// }
// a()


//higher order function
  // it is the function that take another function as an argument or returen a function

  // function greet(names){
  //   return `hello${name}`;
  // }
  // function process(callback){
  //   let username="jagades";
  //   return callback(username);
  // }
  // console.log(process(names));


  // Higher Order Function


// function greet(name) {
//   return `Hello, ${name}`;
// }

// function processUserInput(callback) {
//   let userName = "Jagadesh";
//   return callback(userName); // using function as argument
// }

// console.log(processUserInput(greet)); 
// // Output: Hello, Jagadesh


// let c=10;
// let a=()=>{
  
//   let c=20;
//    console.log(c);
//   console.log("out side of the function");

//   let b=()=>{
//     letc="inside "
//     console.log("inside function")
   
//   }
//   b()

// }
// a()
// console.log(c);



// letcical chain

// js curring
// function a(){

//   return function(a,b){
//        console .log("inside");
//        console.log(`this is a add= ${a+b}`);

//     return function(a,b){
      
//       console.log(`this the sub= ${a-b}`);

//         return function(a,b){
//            console.log(`this a mul= ${a*b}`);

//               return function(a,b){
//                 console.log(`this a div= ${a/b}`);
//               }
           
//         }
//     }
    
//   }
  
// }
// a()(10,20)(20,40)(20,60)(20,40)

function calculater{
   return function(a){
      return function(b){
        return function(c){
          return function(opt){
              switch(opt){
                case "add"
              }
          }
        }
    } 
   }
}


//higher order function

func
