let addBtn =document.getElementById('addBtn');

let taskInput = document.getElementById('taskData');

let noTasks = document.getElementById('noTasks');
let allTasks = document.getElementById('allTasks');


let addTask =() =>{

let taskData =taskInput.value;
if(taskData.trim()==""){


    alert('please enter data');
}else{

    noTasks.remove();
    
    // let alertDiv = document.createElement('div');
    // alertDiv.classList="alert alert-info";
    // alertDiv.append(taskData);
    // allTasks.append(alertDiv);

    allTasks.innerHTML+=` 
    <div class="alert alert-info">
    ${taskData}
    <button  class="btn btn-info float-right delete p-1"> Delete</button>
    </div> 
    `
    taskInput.value="";
}
}
addBtn.addEventListener('click',addTask);

document.addEventListener('click',function(e){

if(e.target.classList.contains('delete'))
    e.target.parentElement.remove();


})