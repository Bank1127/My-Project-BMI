let conbtn = document.getElementsByClassName("con-btn")[0]; 
let btn = conbtn.getElementsByClassName('btn-1');
let currentactive = 0;
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace (" active", "");
      this.className +=" active";
      
      currentactive = i; 
      activebtn(currentactive);
      // console.log(activebtn(currentactive));
    });
}
function activebtn(currentactive) {
  // const active = [];
  return(currentactive);
}
let man = document.getElementById('man');
let women = document.getElementById('women');
let display = document.getElementsByClassName("display")[0];
let txtresult = document.getElementById("result");
let result = "";
let active = "";
 function Apply() {
   active = activebtn(currentactive);

   if (active === 0 && sliderValue1.value > 0 && sliderValue2.value > 0) {
      const height = sliderValue1.value / 100;
      result = sliderValue2.value / (height*height);
      txtresult.innerHTML = result.toFixed(2); 
      display.style.display = "block";
      man.style.display = "block";
      women.style.display = "none";
   } else if (active === 1 && sliderValue1.value > 0 && sliderValue2.value > 0){
     const height = sliderValue1.value / 100;
     result = sliderValue2.value / (height*height);
     txtresult.innerHTML = result.toFixed(2);  
     display.style.display = "block";
     man.style.display = "none";
     women.style.display = "block";
   } 
   else {
     alert("โปรดป้อนข้อมูลให้ครบ")
   }
 }
   
function clearvalue() {
    sliderEl1.value = 0;
    sliderValue1.value = 0;
    sliderEl2.value = 0;
    sliderValue2.value = 0;
    man.style.display = "none";
    women.style.display = "none";
    txtresult.innerHTML = 0;
    sliderEl1.style.background = "#c7c9f7";
    sliderEl2.style.background = "#c7c9f7";
}

const sliderEl1 = document.querySelector("#rvalueh");  // range1
const sliderValue1 = document.querySelector("#valueh");  // inputtxt1
const sliderEl2 = document.querySelector("#rvaluew");  // range2
const sliderValue2 = document.querySelector("#valuew"); // inputtxt2

function handleSliderChange(sliderEl) {
    const tempSliderValue = sliderEl.value;
    
    const progress = (tempSliderValue / sliderEl.max) * 100;
    // const progress = (tempSliderValue * 100) / sliderEl.max;
   
    if (sliderEl === sliderEl1) {
      sliderEl1.style.background = `linear-gradient(to right, #6d71f9 ${progress}%, #c7c9f7 ${progress}%)`;
    } else if (sliderEl === sliderEl2) {
      sliderEl2.style.background = `linear-gradient(to right, #6d71f9 ${progress}%, #c7c9f7 ${progress}%)`;
    } 
  }
  
  // เพิ่ม Event Listener สำหรับ input range แต่ละตัว
  // range1
  sliderEl1.addEventListener("input", function () {
    sliderValue1.value = sliderEl1.value;
    handleSliderChange(sliderEl1);
  });
  // range2
  sliderEl2.addEventListener("input", function () {
    sliderValue2.value = sliderEl2.value;
    handleSliderChange(sliderEl2);
  });
  // เพิ่ม Event Listener สำหรับ input number แต่ละตัว
  // inputtxt1
  sliderValue1.addEventListener("input", function () {
    sliderEl1.value = sliderValue1.value;
    handleSliderChange(sliderEl1);
  });
  // inputtxt2
  sliderValue2.addEventListener("input", function () {
    sliderEl2.value = sliderValue2.value;
    handleSliderChange(sliderEl2);
  });


