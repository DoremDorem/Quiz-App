//login

let loginForm=document.querySelector(".login-form");
let loginInput=loginForm.querySelectorAll("INPUT");
let messageContainer=document.querySelector(".message-container");
let loginBtn=document.querySelector(".login-btn");
let data=[]
if (localStorage.getItem("registerData")!==null){
    data=JSON.parse(localStorage.getItem("registerData"))
}
loginForm.onsubmit=(e)=>{
    e.preventDefault();
    let isEmailMatched=data.find((d)=>d.email===loginInput[0].value);
    let isPasswordMatched=data.find((d)=>d.password===loginInput[1].value);
    if(loginInput[0].value!=="" && loginInput[1].value!==""){
      if(isEmailMatched!==undefined){
          if(isPasswordMatched!==undefined){
            loginBtn.innerHTML="please wait....."
            setTimeout(()=>{
                loginBtn.innerHTML="Login"
                sessionStorage.setItem("user",JSON.stringify(isEmailMatched))
                window.location.href="http://127.0.0.1:5500/Quiz/index.html"
            },4000)
          }
          else{
            messageContainer.innerHTML='user not found'
            messageContainer.style.color="red";
            setTimeout(()=>{
                messageContainer.innerHTML='';
            },4000)
          }
      }
      else{
        messageContainer.innerHTML='Invalid Credentials'
        messageContainer.style.color="red";
        setTimeout(()=>{
            messageContainer.innerHTML='';
        },4000)
      }
    }
    else{
        messageContainer.innerHTML='All fields is required!'
        messageContainer.style.color="red";
        setTimeout(()=>{
            messageContainer.innerHTML='';
        },4000)
    }
}

