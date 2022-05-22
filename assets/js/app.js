let nu1=2601;

if(nu1%2==0){
    alert('this number is even');
}
else{
    alert('this number is odd');
}
//if else  statem ment example

let orgin=300;

if(orgin==100){
    alert('this orgin is '+orgin);
}else if(orgin==200){
    alert('this orgin is '+orgin);
}else if(orgin==300){
    alert('this orgin is '+ orgin);
}else{
    alert('this orgin is not recognize');
}

// the switch case statemetn

let Great='y';
let result;

switch(Great){
    case 'A':
        result=" Great A";
        break;
    case 'B':
        result="Grat B";
        break;
    default:
        result="no result is noww";
        break;
}
alert(result);

//the second  example of switch

let smple='Yes';
let isit;

switch(smple){
    case 'Yes':
        isit +="Yes";
    case 'No':
        isit +="No";
    default:
        isit +="try to ansower quit";
}

alert(isit)