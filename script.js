const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
let todoApp = document.getElementById('todo-app')
function AddTask(){
    if(inputBox.value ===''){
     alert('You must wite somthing!')
    }
    else{
     let li = document.createElement("li")
     li.innerHTML = inputBox.value
     listContainer.appendChild(li)
     let span =  document.createElement("span")
     span.innerHTML = "\u00d7";
     li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
    scrollControl(); 
}
listContainer.addEventListener('click',function(e)
{
       if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
       }
       else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
       
       }
       scrollControl()
},false
)
function saveData(){
 localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
 listContainer.innerHTML=localStorage.getItem("data")
}
showTask()
scrollControl();  

inputBox.addEventListener("keypress", (event) => {
 if (event.key === "Enter") {  
   AddTask();
 }
});
scrollControl(); 
// scroll

function scrollControl() {
 const taskCount = listContainer.getElementsByTagName('li').length;
 
 // Enable scrolling if there are more than 4 tasks
 if (taskCount > 4) {
     listContainer.style.overflowY = "scroll";
     listContainer.style.maxHeight = "200px";  // Adjust max-height as needed
 } else {
     listContainer.style.overflowY = "hidden";
     listContainer.style.maxHeight = "none";  // Remove max-height if fewer than 4 tasks
 }
}