//---------------------------asyns

//function time

// console.log("hello");

// let a= setTimeout(() => {
//     console.log(" paavai college");
    
// }, 2000);

// console.log("i am jaga");

//-------------------- set intervel
// let count=0;
//  console.log("this the code of excuted in settimeintervel");
// let a=setInterval(() => {
//    count++
//    console.log(count);
//    if (count==10) {
//     clearInterval(a)
//    }
    
// }, 2000);


///-----------------promiss---------------------
//*
let datas=false;
let data=new Promise((resolve, reject) => {
    if (datas===true) {
     resolve("hellow world")   
    }
    else{
        reject("server error")
    }
})
console.log(data);
data.then((value)=>{
    console.log(value);
    
})
data.catch((value)=>{
    console.log(value);
    
})
