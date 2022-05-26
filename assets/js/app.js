// let currentMusic=0;

// const music=document.querySelector('#audio');

// function  celiceos(farnhit) {
//     return (5/9)*(farnhit-32);
// }

// document.getElementById('audioo').innerHTML= celiceos();

// let car={
//     name:"corolla",
//     age:34,
//     color:'red',

//     distinct: function start(){ return "km"},
// }
// alert(car.name+car.color+car.distinct());

// let str="Pldsdaasewheree 'locate' occu  r  s  !       ";
// let len=str.indexOf('locate');
// let text='ABCDEFGHJK';
// text.split("| ,");

// let age= prompt('how old are you?', 20);
// let showw=document.getElementById('audiooo').innerHTML=age;
// alert(`your age is ${age} this is good `+ age)

// let isBoss= confirm('are you a manager?');
// alert(isBoss);
// let name=prompt('what is your name?');
// alert(`your name is ${name}`);

// let user={
//     name:"Alia",
//     age:17,
//     old:'young'
    
// }

// let key= prompt("what do you want to know from alia?", "name");

// alert(user[key]);

// let stu={
//     f:"blob blob blbob",
//     g:3434,
//     h:"kdjfij",
// }
// let keyr=prompt('what kind of informa tionn');
// alert(stu[keyr]);

function makeUser(name, age){
    return{
        name: name,
        age: age
    };
}
let user1 = makeUser('Mahdi', 20);
console.log("User name: ", user1.name);

function stdUser(data,info){
    return{
        data,
        info,
    }
}
let std1=stdUser('fullData ','Good info');
alert(std1.data);
let stuedet={
    name:'ali',
    age:20,
    position:'first'
}

for (let std in stuedet){
    console.log(std);
    console.log(stuedet[std]);
}

///obj exaim 

let user = {
    name : "John",
    surnam : 'Smite',
}
user.name="Pete";
delete user.name;

alert(user.name);
//second chalinge

function isEmpty(){
    

}