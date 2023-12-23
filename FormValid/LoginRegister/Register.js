let username=document.getElementById("username");
let password=document.getElementById("password");
let btn1=document.getElementById("btn1");
let p1=document.getElementById("p1");
let p2=document.getElementById("p2");

btn1.addEventListener("click",(event)=>{
    if((username.value=="")&&(password.value=="")){
        event.preventDefault()
        username.style.border="solid red 2px"
        password.style.border="solid red 2px"
        p1.innerText="*required"
        p2.innerText="*required"
        p1.style.color="red"
        p2.style.color="red"
    }
    else if(username.value==""){
        event.preventDefault()
        p1.innerText="*required"
        username.style.border="solid red 2px"
        p1.style.color="red"
    }
    else if(password.value==""){
        event.preventDefault()
        p2.innerText="*required"
        password.style.border="solid red 2px"
        p2.style.color="red"
    }
    else{
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
    }
})

