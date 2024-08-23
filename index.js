//1. Get HTML Collection of all buttons
let buttons = document.getElementsByTagName("button");

//2. Convertes HTML collection to Array
let buttonsArray = Array.from(buttons);

//3. Add 'click' event listner on all the buttons
buttonsArray.forEach((button) => {
  button.addEventListener("click", printNum);
});

// 4. Create a function which will be called by event listner
function printNum(event) {
  // 4.1 -> Get the button clicked by user eg. <button>C<button>
  let button = event.target;
  // 4.2 -> Get the innerHTML of the button  eg. C
  let newValue = button.innerHTML;

  // 4.3 -> Get the screen and update the new value
  let screen = document.getElementById("screen");

  //4.4 clear screen if button 'C' is clicked
   if (newValue === "C") {
    screen.value = "";
   return;
  }
  else if(newValue==="+-"){
    if(screen.value[0]==="-"){
      screen.value=screen.value.slice(1);

    }else{
      screen.value = "-" + screen.value;
    }
  }
  // if("+-*/".includes(newValue)){
  
  // }
  // 4.5 evaluate answer if clicked on =
  if (newValue === "=") {
    let ans = 0;
   
  
    if (screen.value.includes("+")) {
      ans = performSum(screen.value);
      screen.value = ans;
      return;
    }

   else if (screen.value.includes("-")) {
        ans = performminus(screen.value);
        screen.value = ans;
        return;
      }

    else  if (screen.value.includes("/")) {
        ans = performDiv(screen.value);
        screen.value = ans;
        return; 
      }
    else  if (screen.value.includes("*")) {
        ans = performMul(screen.value);
        screen.value = ans;
        return;
      }
   else   if (screen.value.includes("%")) {
        ans = performModulo(screen.value);
        screen.value = ans;
        return;
      }

    

  }

  // screen.value = screen.value + newValue;
  screen.value += newValue;
}

// value = '1 0 0 + 2 0 0 0'
//          0 1 2 3 4 5 6 7
function performSum(value) {
  let plusIndex = value.indexOf("+");
  let num1 = value.slice(0, plusIndex);
  let num2 = value.slice(plusIndex + 1);
  let sum = Number(num1) + Number(num2);
  return sum;
}
function performminus(value) {
    let plusIndex = value.indexOf("-");
    let num1 = value.slice(0, plusIndex);
    let num2 = value.slice(plusIndex + 1);
    let minus = Number(num1) - Number(num2);
    return minus;
  }
  function performMul(value) {
    let plusIndex = value.indexOf("*");
    let num1 = value.slice(0, plusIndex);
    let num2 = value.slice(plusIndex + 1);
    let Mul = Number(num1) * Number(num2);
    return Mul;
  }
  function performDiv(value) {
    let plusIndex = value.indexOf("/");
    let num1 = value.slice(0, plusIndex);
    let num2 = value.slice(plusIndex + 1);
    let Div = Number(num1) / Number(num2);
    return Div;
  }
  function performModulo(value) {
  let plusIndex = value.indexOf("%");
  let num1 = value.slice(0, plusIndex);
  let num2 = value.slice(plusIndex + 1);
  let Modulo = Number(num1) % Number(num2);
  return Modulo;
}
