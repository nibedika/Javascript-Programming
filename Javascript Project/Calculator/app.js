//Display part start---------------------->>
// Input section- with addonscreen function

var input = document.getElementById("display2");
var output = document.getElementById("display1");
function addtoscreen(x){
    input.value +=x;
    if(x=='c'){
        input.value='';
        output.value='';
    }   
}
function backspace(){
    var number=input.value;
    var len=number.length-1;
    var newnumber=number.substring(0,len);
    input.value=newnumber;
}

//Output section- with answer function

function answer() {
    var x = input.value;
    var y = input.value;
    var sval = [];
    var str = "";

    var ptn;
    if(ptn = new RegExp(/sin/g))
    {
        if(ptn.test(x)){
        sval = x.split(" ");
        str += "Math." + sval[0] + "(" + (sval[1] * (3.14159 / 180)) + ")";
        }
        else{
            str += x;
        }

    x = eval(str);
    output.value = x;
    }
	if(ptn = new RegExp2(/cos/g))
    {
        if(ptn.test(x)){
        sval = x.split(" ");
        str += "Math." + sval[0] + "(" + (sval[1] * (180 / 3.14159)) + ")";
        }
        else{
            str += x;
        }

    x = eval(str);
    output.value = x;
    }


    /*if(ptn = new RegExp(/cos/g))
    {
        if(ptn.test(x)){
        sval = x.split(" ");
        str += "Math." + sval[0] + "(" + (sval[1] * (3.14159 / 180)) + ")";
        }
        else {
            str += x;
        }

    x = eval(str);
    output.value = x;
    }*/

}

//Display part end------------------------>>

//Calculation section start--------------->>
//Advanced Calculation Section

function power(y){
    x=input.value;
    y=Math.pow(x,y);
    output.value=y;
} 
function sqrt(y){
    x=input.value;
    y=Math.sqrt(x,y);
    output.value=y;
}

//Sin-Cos Calculation section

function degree(x){
    input.value += x;
    /*
    //y=input.value;
    if(x=='sin'){
        output.value=Math.sin(y);
    }   
    */

    //console.log(input.value || 0, x);
    //output.value = Math.sin(y);
}
