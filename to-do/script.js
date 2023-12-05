const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addbtn(){
    if(inputBox.value===''){
        alert("enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
      
    }
    inputBox.value='';
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function getdata(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
getdata();