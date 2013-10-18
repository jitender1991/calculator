$(document).ready(function(){
$("#seven").on('click',function(){ init(7); });
$("#eight").on('click',function(){ init(8); });
$("#nine").on('click',function(){ init(9); });
$("#four").on('click',function(){ init(4); });
$("#five").on('click',function(){ init(5); });
$("#six").on('click',function(){ init(6); });
$("#one").on('click',function(){ init(1); });
$("#two").on('click',function(){ init(2); });
$("#three").on('click',function(){ init(3); });
$("#zero").on('click',function(){ init(0); });
$("#add").on('click',function(){ init("+"); });
$("#subtract").on('click',function(){ init("-"); });
$("#multiply").on('click',function(){ init("*"); });
$("#divide").on('click',function(){ init("/"); });
$("#equalTo").on('click',function(){ init("="); });
$("#clear").on('click',function(){ init("clear"); });
});

var s;

function init(n){
    switch(n){
    case 0:
        display(0);
        break;
    case 1:
        display(1);
        break;
    case 2:
        display(2);
        break;
    case 3:
        display(3);
        break;
    case 4:
        display(4);
        break;
    case 5:
        display(5);
        break;
    case 6:
        display(6);
        break;
    case 7:
        display(7);
        break;
    case 8:
        display(8);
        break;
    case 9:
        display(9);
        break;
    case "/" :
        s = saveResult("/");
        break;
    case "+" :
        s = saveResult("+");
        break;
    case "*" :
        s = saveResult("*");
        break;
    case "-":
        s = saveResult("-");
        break;
    case "=":
        s.equalTo();
        break;
    case "clear":
        var id = document.getElementById("screen");
        id.value=" ";
        break;
    }
}    


function display(num){
    console.log(num);
    var id = document.getElementById("screen");
    id.value = id.value + num;
}

var saveResult = function(op){
    var id = document.getElementById("screen");
    var result1 = parseInt(id.value);
    id.value = " ";
    return {
        equalTo:function(){
            var id = document.getElementById("screen");
            var result2 = parseInt(id.value);
            switch(op){
                case "+":id.value = result1 + result2;
                         break;
                case "-":id.value = result1 - result2;
                         break;
                case "*":id.value = result1 * result2;
                         break;
                case "/":id.value = result1 / result2;
                         break;
            }
        }  
    }
}    
