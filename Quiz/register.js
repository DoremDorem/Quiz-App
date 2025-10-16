//register code

let regForm=document.querySelector(".reg-form");
let regInput=regForm.querySelectorAll('INPUT');
let messageContainer=document.querySelector(".message-container");
let regBtn=document.querySelector(".register-btn")
let registerData=[];
if(localStorage.getItem("registerData")!=null){
    registerData=JSON.parse(localStorage.getItem("registerData"));
}
regForm.onsubmit=(e)=>{
    e.preventDefault();
    isUser=registerData.find((data)=>data.email===regInput[1].value)
   if(regInput[0].value!=="" && regInput[1].value!=="" && regInput[2].value!==""){
      if(isUser===undefined){
         let data={
            name:regInput[0].value,
            email:regInput[1].value,
            password:regInput[2].value
         }
         registerData.push(data);
         localStorage.setItem("registerData",JSON.stringify(registerData));
         regBtn.innerHTML="please wait....."
         setTimeout(()=>{
                regBtn.innerHTML="Register"
                window.location.href="http://127.0.0.1:5500/Quiz/login.html"
        },4000)
         
      }
      else{
        messageContainer.innerHTML='Email already taken'
        messageContainer.style.color="red";
        setTimeout(()=>{
            messageContainer.innerHTML='';
        },4000)
      }
   }
   else{
       messageContainer.innerHTML='all fields is required!'
       messageContainer.style.color="red";
       setTimeout(()=>{
        messageContainer.innerHTML='';
       },4000)
   }
}