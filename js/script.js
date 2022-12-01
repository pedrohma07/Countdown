"use strict"

var dias = 1;
var hora = 1;
var min = 0;
var seg = 60;
var count;

var aux = dias;


function start(){
    clearInterval(count);
    
    count = setInterval(timer, 1);
}

function pare(){
    clearInterval(count);
    document.getElementById("count").innerHTML = "00 : 00 : 00 : 00"
}

function timer(){
    /*REformular
    
    if(aux == dias){
        dias--;
    }
    seg--;
    if(dias == 0 && hora == 0 && min == 0 && seg == 0){
        pare();

    }
    if(hora == 0){
        dias--;
        hora = 23;
    }
    if(min < 0){
        hora--;
        min = 59;
    }
    if(seg == 0){
        min--;
        seg = 60;
    }*/
    
    

    var format = (dias < 10 ? "0" +dias: dias)+" : "+(hora < 10 ? "0"+ hora: hora)+" : "+(min < 10 ? "0"+min : min)+" : "+(seg < 10 ? "0"+seg : seg);
    document.getElementById("count").innerHTML = format;
}