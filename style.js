let count = 0;
let project1 = setInterval(function(){
    count++;
    let num1 =document.querySelector("#num1").innerHTML = count;
    if(count==200){
        clearInterval(project1);
    }

},15);

let i = 0;
let project2 = setInterval(function (){
    i++
    let num2 = document.querySelector("#num2").innerHTML=i;

    if(i==300){
      
        clearInterval(project2);
    }
},15);


let s =0;
let project = setInterval(project3,15);

function project3(){
    s++;
    let num3 = document.querySelector("#num3").innerHTML = s;
 
    if(s==100){
        clearInterval(project)
    }
}


