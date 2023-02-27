const personal=document.getElementById("personal")
const dropdown=document.getElementById("dropdown")
personal.addEventListener("mouseover",()=>{
    document.getElementById("dropdown").innerHTML=``;
    dropdown.classList.add("dropdown");
});
personal.addEventListener("mouseout",()=>{
    document.getElementById("dropdown").innerHTML=``;
    dropdown.classList.remove("dropdown");
});