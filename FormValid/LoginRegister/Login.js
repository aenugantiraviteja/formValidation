let username=document.getElementById("username");
let password=document.getElementById("password");
let Login=document.getElementById("Login");
let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let x=localStorage.getItem("username");
let y=localStorage.getItem("password");
let e=document.getElementById("e");

Login.addEventListener("click",(event)=>{
    if((username.value!=x)&&(password.value!=y)){
        event.preventDefault()
        username.style.border="solid red 2px"
        password.style.border="solid red 2px"
        p1.innerText="*required"
        p2.innerText="*required"
        p1.style.color="red"
        p2.style.color="red"
        e.innerText="incorrect username and password";
        e.style.color="red"
        
    }
    else if(username.value!=x){
        event.preventDefault()
        p1.innerText="*required"
        username.style.border="solid red 2px"
        p1.style.color="red"
        e.innerText="incorrect username and password";
        e.style.color="red"
    }
    else if(password.value!=y){
        event.preventDefault()
        p2.innerText="*required"
        password.style.border="solid red 2px"
        p2.style.color="red"
        e.innerText="incorrect username and password";
        e.style.color="red"
    }
    
})
