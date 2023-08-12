let UserInput=document.getElementById("input")
let expression =" "

function btn(num){
    expression=expression+num
    UserInput.value=expression
}
function equal(){
    UserInput.value=eval(expression)
    expression= UserInput.value
}
function erase(){
    expression=" "
    UserInput.value=expression
}