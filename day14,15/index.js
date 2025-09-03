//
// let a=["a","c","b","d"]
// console.log(a.sort());

// let b=[10,30,20,60,80]
// console.log(b.sort((a,b)=>a-b));
// // ass order and dis order
// let arr=[10,20,30,40,50,60,70,300]
// console .log(arr.sort((a,b)=>b-a))

// let d=["server"]
// console.log(d.sort((a,b)=>a-b))

// let arr=[10,"server",["var","dom","object"],["promiss","asyns"]]
// console.log(arr[3])

// let [a,b,[c,[d]],[e]]=[10,"server",["var",["man"]],["manage"]]
// console.log(a,b,c,d,e)

//map ,filter , reduce , for each,objects and method ,splrit modiles,asyn js ,timer , asyn weight----------------------------------------------->imporatan

//map
// -------------------------hiherored function

// let names=[10,40]
// const double=names.map(num=>num*num)
// console.log(double)

// let number=[10,50]
// const double=number.map((value,index)=>{
//     console.log(index);
//     return value*2
// })

// console.log(double);
// console.log(number);

/////// -----------------next method  filter method

// let number=[2,50,70,60]
// const result=number.filter((x)=>{
//     return x>=50
// })
// console.log(result);

// const result1=number.map((x)=>x>60);
// console.log(result1);


////---------------------------reduce method
// let arr=[1,1,1,1]
// let result=arr.reduce((acc,curr)=>{
//     return acc+curr
// },200)
// console.log(result);


// let server=[0,30,50,80,100,60,125]
// const randaom=Math.max(...server) //sper order
// console.log(randaom);

//--------------------------for each method

// cant retun vareable  we can store the value
// let arr=[39,50,60]
// let result=arr.forEach((value)=>{
//     console.log(value);
    
// })
// console.log(result);

//--------------------object letral

let person={
    names:"jagades",
    age:20,
    skill:['javs','manager','server']

}
console.log(person)
person.skill.map(x=>console.log(x))


// accessing data in object
// 1.notation 
// 2.[]

