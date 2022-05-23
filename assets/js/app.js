let currentMusic=0;

const music=document.querySelector('#audio');

function  celiceos(farnhit) {
    return (5/9)*(farnhit-32);
}

document.getElementById('audioo').innerHTML= celiceos;

let car={
    name:"corolla",
    color:'black',
    price:3000,
    distinct: function start(){ return "5000km"},
}
alert(car.name+car.color+car.distinct());