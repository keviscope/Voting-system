
let display = document.querySelector("#display");
let display1 = document.querySelector("#display1");

let myform = document.querySelector('#myform');
//let question = document.myform.question.value;
let word1 = document.querySelector("#word1");
let excel = document.querySelector("#excel");
let btn = document.querySelector("#btn");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let container = document.querySelector("#container");
let congrat = document.querySelector('#congrat');


  

function showHideDiv(){
  
  if(btn.style.display == "none"){ 
        
    btn.style.display = "block";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";

    }else{
        btn.style.display = "none";
    }
  



    
};




//word
class theProgressBar{
    constructor(element, initial = 0){
        this.elemValue = element.querySelector('.progressBarValue');
        this.elemFill = element.querySelector('.progressBarFill');
        this.setValue(initial);
    }
    setValue(newValue){
        if(newValue < 0){
            newValue = 0;
        }
        if(newValue > 100){
            newValue = 0;
        }
        this.value = newValue;
        this.update()
    }
update(){
    const voteCount = `${this.value}%`;
    this.elemValue.style.width = voteCount;
    this.elemFill.style.background = "grey";
    this.elemValue.textContent = `${voteCount} Votes`;
    this.elemValue.style.background = "#ff9806";
}
}
//new theProgressBar(document.querySelector('.progressBar'), 10);
let a = 1;
btn.addEventListener('click', () =>{
     
    
      let outProgress1 = new theProgressBar(document.querySelector('.progressBar'));
      outProgress1.setValue(a++);
     alert("Thank you for voting");
 
  })



function showHideDiv1(){
    let btn1 = document.querySelector("#btn1");
  if(btn1.style.display == "none"){ 
        
    btn1.style.display = "block";
    btn.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";

    }else{
    btn1.style.display = "none";

    }
   
   
    
};


//Excel
class theProgressBar1{
    constructor(element1, initial1 = 0){
        this.elemValue1 = element1.querySelector('.progressBarValue1');
        this.elemFill1 = element1.querySelector('.progressBarFill1');
        this.setValue(initial1);
    }
    setValue(newValue1){
        if(newValue1 < 0){
            newValue1 = 0;
        }
        if(newValue1 > 100){
            newValue1 = 0;
        }
        this.value = newValue1;
        this.update1()
    }
update1(){
    let  voteCount1 = `${this.value}%`;
    this.elemValue1.style.width = voteCount1;
    this.elemFill1.style.background = "grey";
    this.elemValue1.textContent = `${voteCount1} Votes`;
    this.elemValue1.style.background = "#ff9806";
}
}
b = 1;
btn1.addEventListener('click', () =>{
    let outProgress1 = new theProgressBar1(document.querySelector('.progressBar1'));
      outProgress1.setValue(b++);
     alert("Thank you for voting");
})





function showHideDiv2(){
    let btn2 = document.querySelector("#btn2");
  if(btn2.style.display == "none"){ 
        
    btn2.style.display = "block";
    btn.style.display = "none";
    btn1.style.display = "none";
    btn3.style.display = "none";
    }else{
    btn2.style.display = "none";

    }
   

    
};




//PowerPoint
class theProgressBar2{
    constructor(element2, initial2 = 0){
        this.elemValue2 = element2.querySelector('.progressBarValue2');
        this.elemFill2 = element2.querySelector('.progressBarFill2');
        this.setValue(initial2);
    }
    setValue(newValue2){
        if(newValue2 < 0){
            newValue2 = 0;
        }
        if(newValue2 > 100){
            newValue2 = 0;
        }
        this.value = newValue2;
        this.update2()
    }
update2(){
    let  voteCount2 = `${this.value}%`;
    this.elemValue2.style.width = voteCount2;
    this.elemFill2.style.background = "grey";
    this.elemValue2.textContent = `${voteCount2} Votes`;
    this.elemValue2.style.background = "#ff9806";
}
}
c = 1;
btn2.addEventListener('click', () =>{
    let outProgress2 = new theProgressBar2(document.querySelector('.progressBar2'));
      outProgress2.setValue(c++);
     alert("Thank you for voting");
})




function showHideDiv3(){
    let btn3 = document.querySelector("#btn3");
  if(btn3.style.display == "none"){ 
        
    btn3.style.display = "block";
    btn2.style.display = "none";
    btn.style.display = "none";
    btn1.style.display = "none";
    }else{
    btn3.style.display = "none";

    }
   
  
    
};





//Access
class theProgressBar4{
    constructor(element4, initial4 = 0){
        this.elemValue4 = element4.querySelector('.progressBarValue4');
        this.elemFill4 = element4.querySelector('.progressBarFill4');
        this.setValue(initial4);
    }
    setValue(newValue4){
        if(newValue4 < 0){
            newValue4 = 0;
        }
        if(newValue4 > 100){
            newValue4 = 0;
        }
        this.value = newValue4;
        this.update4()
    }
update4(){
    let  voteCount4 = `${this.value}%`;
    this.elemValue4.style.width = voteCount4;
    this.elemFill4.style.background = "grey";
    this.elemValue4.textContent = `${voteCount4} Votes`;
    this.elemValue4.style.background = "#ff9806";
}
}
d = 1;
btn3.addEventListener('click', () =>{
    let outProgress4 = new theProgressBar4(document.querySelector('.progressBar4'));
      outProgress4.setValue(d++);
     alert("Thank you for voting");
})
 
 






























/*
function btn(){
    let myform = document.querySelector('#myform');
let question = document.myform.question.value;
let word = document.querySelector("#word");
let excel = document.querySelector("#excel");
let powerPoint = document.querySelector("#powerPoint");
let access = document.querySelector("#access");

    c = 0;
if(question == "Microsoft Word"){
    c++;
    word.textContent = `${c} Votes`;
}

if(question == "Excel"){
    c++;
    excel.textContent = `${c} Votes`;
}

if(question == "PowerPoint"){
    c++;
    powerPoint.textContent = `${c} Votes`;
}

if(question == "Access"){
    c++;
    access.textContent = `${c} Votes`;
}

*/