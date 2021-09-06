let addBtn =document.getElementById('addBtn');
let add =document.getElementById('show model');
let taskInput = document.getElementById('taskData');
let btnDarkWhite =document.getElementById('btnDarkWhite');
let noTasks = document.getElementById('noTasks');
let allTasks = document.getElementById('allTasks');
let vvv =document.getElementById('vvv');
let model =document.getElementById('model');
let openDarkAndLight=()=>{

    if(vvv.classList.contains('dark')){
        vvv.classList.remove('dark');
        btnDarkWhite.classList ="btn btn-dark";
        btnDarkWhite.innerText="dark mood";
        
            }else{
                vvv.classList.add('dark');
                btnDarkWhite.classList ="btn btn-light";
                btnDarkWhite.innerText="Light mood";
            }

}
btnDarkWhite.addEventListener('click',openDarkAndLight);

let showNoTsks =()=>{

    if(allTasks.childElementCount==0){

        noTasks.classList.remove('none');
    }
}

let openModel =()=>{


model.classList.toggle('block');
}
add.addEventListener('click',openModel);
let addTask =() =>{

let taskData =taskInput.value;
if(taskData.trim()==""||taskInput.value.length<3||taskInput.value.length>40){


    alert('please enter data  and please enter data more than 3 word and less than 40 word');
}else{

    noTasks.classList.add('none');
    
    // let alertDiv = document.createElement('div');
    // alertDiv.classList="alert alert-info";
    // alertDiv.append(taskData);
    // allTasks.append(alertDiv);

    allTasks.innerHTML+=` 
    <div class="task alert alert-info">
    ${taskData}
    <button  class="btn btn-info float-right delete p-1"> Delete</button>
    </div> 
    `
   
    taskInput.value="";
    openModel();

    allTasks.addEventListener('click',function(e){

        if(e.target.classList.contains('task')){
        
            e.target.classList.toggle('check');
        }
        
            })
}
}
addBtn.addEventListener('click',addTask);

document.addEventListener('click',function(e){

if(e.target.classList.contains('delete'))
    e.target.parentElement.remove();
    showNoTsks();

})