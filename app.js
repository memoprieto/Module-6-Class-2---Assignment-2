const nonImpIcon="far fa-star";
const impIcon="fas fa-star";
var isImportant=false;
var isVisible=true;

function toggleImportant(){
    if (isImportant){
       $("#iImportant").removeClass(impIcon).addClass(nonImpIcon);
       isImportant=false;
    }  else {
       $("#iImportant").removeClass(nonImpIcon).addClass(impIcon);
       isImportant=true;
    }
}

function togglePanel() {
    if (isVisible) {
        $("#pnlForm").fadeOut();
        isVisible=false;
   } else {
     $("#pnlForm").fadeIn();
     isVisible=true;
   }
}

function init(){
    console.log("task manager");

    // load data

    // hook events
    $("#iImportant").click(toggleImportant);
    $("#btnShowHide").click(togglePanel);

}

window.onload=init;
//

















//var GRAVITY=1.8;

//function hello(){
//    let color="Blue";
//    console.log("Hello there!",color);
//}

//function sayHello(firstName){
//console.log("Hello" + firstName+""+lastName);
//}

// saveData(){
    // validate data
//    if(dataValid==false){
//        return; // do not continue saving
//    }


//}

//function printSumResult(num1,num2)

//function sum(num1, num2){
//    let total=num1+num2;
 //   return total;
//}

//function printSomeNumbers() {
    //except 11, 13
 //   for (let i=0; i<21; i++) {
        /**
         * 
         * let banned = [11,13];
         * if(!banned.includes(i))
         * 
         */
 //       if(i !=11 && i !=13){
 //           console.log(i);
 //       }
//    }
//}

//function init(){
//    console.log("Intro page");

//    hello();
    //console.log(color);

//    let name="sergio";
//    sayHello(name, "Inzunza");

 //   printSumResult(21, 21, -90)

//    let answer=sum(21,21);
//   console.log("The answer is", answer); //42

//    let div1=divide(100,10); //10
//    let div2=divide(200,0); //ERROR: Zero division not allowed
//    console.log(div1,div2);


//    printSomeNumbers(); // 0 to 20
//}

//window.onload=init;