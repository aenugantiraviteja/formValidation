let username=localStorage.getItem("username");
let h1=document.getElementsByTagName("h1")[0];
h1.textContent+= " "+username;