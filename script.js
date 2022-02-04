/*
Program by
Nnah, Samuel Gordon for GROUP 4
*/

var selection = "rad"
     
// function to insert numbers
function insert(num){
    var text = document.form.OutputScreen.value
    document.form.OutputScreen.value = text + num
}

// the clear button function
function clean(){
    document.form.OutputScreen.value = ""
}
  
// the equals button function
function calculate(){

  try {
    var text = document.form.OutputScreen.value
    document.form.OutputScreen.value = eval(text)
  } catch (error) {
    alert("invalid expression of operands, try again") 
  }
    
}

//  the delete button function
function back(){
     var text = document.form.OutputScreen.value
     document.form.OutputScreen.value = text.substring(0,text.length-1)
}

// function to calculate sine of an angle
function calc_sin(){
     var text = document.form.OutputScreen.value
     if (selection == "rad"){
       document.form.OutputScreen.value = Math.sin(text)
     } else if (selection == "deg"){
       document.form.OutputScreen.value = Math.sin(text * (Math.PI / 180))
     }
   }

// function to calculate Cosine of an angle  
function calc_cos(){
   var text = document.form.OutputScreen.value
   if (selection == "rad"){
     document.form.OutputScreen.value = Math.cos(text)
   } else if (selection == "deg"){
     document.form.OutputScreen.value = Math.cos(text * (Math.PI / 180))
   }
 }

//  function to calculate Tangent of an angle
function calc_tan(){
   var text = document.form.OutputScreen.value
   if (selection == "rad"){
     document.form.OutputScreen.value = Math.tan(text)
   } else if (selection == "deg"){
     document.form.OutputScreen.value = Math.tan(text * (Math.PI / 180))
   }
 }

 //  function to calculate the squareroot
 function calc_sqrt(){
 var text = document.form.OutputScreen.value
 document.form.OutputScreen.value = Math.sqrt(text)
 }
 
 //  function to calculate
 function calc_percent(){
 var text = document.form.OutputScreen.value
 document.form.OutputScreen.value = text/100 + "%";
 }
 
 function textange_label_selection(){
   var label = document.getElementById("info");
   label.innerHTML = "<b>"+selection.toUpperCase()+"</b>";
 }
 
 function calc_deg(){
   var element = document.getElementById("deg")
   element.style = "border: 0.2px solid red"
   var element2 = document.getElementById("rad")
   element2.style = " 0.2px border solid"
   
   selection = "deg" //Set selection to deg
   textange_label_selection()
 }
 
 function calc_rad(){
   var element2 = document.getElementById("rad")
   element2.style = "border: 0.2px solid red"
   var element = document.getElementById("deg")
   element.style = "border: 0.2px solid"
   
   selection = "rad" //Set selection to rad
   textange_label_selection()
 }
 
 function calc_log(){
    var text = document.form.OutputScreen.value;
    document.form.OutputScreen.value = Math.log(text);
 }
 
 function calc_exp(){
    var text = document.form.OutputScreen.value;
    document.form.OutputScreen.value = Math.exp(text);
 }

// to Convert from base_10 to base_2
 function conv_toBinary(){
  var num = parseInt(document.getElementById("OutputScreen").value);
  const BinResult  = num.toString(2);
  const OutputScreen = document.querySelector("#OutputScreen")
  OutputScreen.value = BinResult ; 
 }

// to Convert from base_8 to base_2
 function conv_toBinary_2(){
  var num = document.getElementById("OutputScreen").value;
  var DeciResult  = parseInt(num,8);
  const BinResult  = DeciResult.toString(2);
  const OutputScreen=document.querySelector("#OutputScreen")
  OutputScreen.value= BinResult;  
 }

// to Convert from base_2 to base_10
 function conv_toDecimal() {
  var num = document.getElementById("OutputScreen").value;
  const DeciResult  = parseInt(num,2);
  const OutputScreen=document.querySelector("#OutputScreen")
  OutputScreen.value= DeciResult;
 }

// to Convert from base_8 to base_10
 function conv_toDecimal_2() {
  var num = document.getElementById("OutputScreen").value;
  const DeciResult  = parseInt(num,8);
  const OutputScreen = document.querySelector("#OutputScreen")
  OutputScreen.value = DeciResult;
 }

 // to Convert from base_2 to base_8
 function  conv_toOctal(){
  var num = document.getElementById("OutputScreen").value;
  var DeciResult  = parseInt(num,2);
  var OctResult  = DeciResult.toString(8);
  const OutputScreen = document.querySelector("#OutputScreen")
  OutputScreen.value = OctResult; 
 }

// to Convert from base_10 to base_8
 function  conv_toOctal_2(){
  var num = parseInt(document.getElementById("OutputScreen").value);
  const OctResult = num.toString(8);
  const OutputScreen = document.querySelector("#OutputScreen")
  OutputScreen.value =  (OctResult) ;  
}

// function to evaluate numbers and change its sign 
function changeSign(){
var num = document.getElementById("OutputScreen").value;
if(num<0){
  num = num*-1;
const OutputScreen = document.querySelector("#OutputScreen")
OutputScreen.value = num; 
}
else{
num=num*-1;
const OutputScreen = document.querySelector("#OutputScreen")
OutputScreen.value = num; 
}
}

// function to calculate the root of a biquadratic equation 
function rootsofpolynomial(){
  // define the roots to be used 
  let root1, root2;

  // take input from the user
  let a = prompt("Enter the first number, A:");
  let b = prompt("Enter the second number, B:");
  let c = prompt("Enter the third number, C:");
  
  // calculate discriminant
let discriminant =  ((b * b) - (4 * a * c));


// condition for real and different roots
          if (discriminant > 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            // result
            const OutputScreen = document.querySelector("#OutputScreen")
            OutputScreen.value = (`Root 1 is ${root1} and Root 2 is ${root2}`);
          }

// condition for real and equal roots
          else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);

            // result
            const OutputScreen = document.querySelector("#OutputScreen")
            OutputScreen.value =(`Root 1 is ${root1} and Root 2 is ${root2}`);
          }

// if roots are not real
            else {
              let realPart = (-b / (2 * a)).toFixed(2);
              let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

              // result
            const OutputScreen = document.querySelector("#OutputScreen")
            OutputScreen.value =(
              `Roots are ${realPart} + ${imaginaryPart}i & ${realPart} - ${imaginaryPart}i`
            );
            }
}

// function to calculate polynomial of the form: aX^2 + c = 0
function rootsofpolynomial_2(){
              // define the roots to be used 
              let root1, root2;

              // take input from the user
              let a = prompt("Enter the first number, A:");
              const b = 0;
              let c = prompt("Enter the third number, C:");
              
              // calculate discriminant
            let discriminant =  ((b * b) - (4 * a * c));
              
            // condition for real and different roots
            if (discriminant > 0) {
              root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
              root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

              // result
              const OutputScreen = document.querySelector("#OutputScreen")
              OutputScreen.value = (`Root 1 is ${root1} and Root 2 is ${root2}`);
            }

            // condition for real and equal roots
            else if (discriminant == 0) {
              root1 = root2 = -b / (2 * a);

              // result
              const OutputScreen = document.querySelector("#OutputScreen")
              OutputScreen.value =(`Root 1 is ${root1} and Root 2 is ${root2}`);
            }

            // if roots are not real
              else {
                let realPart = (-b / (2 * a)).toFixed(2);
                let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

                // result
              const OutputScreen = document.querySelector("#OutputScreen")
              OutputScreen.value =(
                `Roots are ${realPart} + ${imaginaryPart}i & ${realPart} - ${imaginaryPart}i`
              );
              }
}
