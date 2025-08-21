
// destructuring

// they are two types  
// 1.array destructuring
// 2.object destructuring

// 1.array destructuring
//const[variable1,variable2,variable3]=array


// const Number=[1,2,3];
// const [first,second]=Number;
// console.log(first,second);


// 2.object destructuring

// const{name,age,number}=object;
// const user={
//     name:"jaga",
//     age:12,
//     mail:"jagadeshvar@gmail.com"
// }

// const{name,age,mail:ail}=user;
// console.log(name,age,ail);



const user2={
    id:1,
    name:"siva",
    age:23
}

const{id,name,age}=user2;
console.log(id,name,age)