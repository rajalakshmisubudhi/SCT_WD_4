const todoForm=document.getElementById('todo-form');
const todoInput=document.getElementById('todo-input');
const todoDate=document.getElementById('todo-date');
const todoList=document.getElementById('todo-list');

todoForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const taskText=todoInput.value.trim();
    const taskDateTime=todoDate.value;

    if(taskText=='')return;
    

    const li=document.createElement('li');

    const taskContent=document.createElement('span');
    taskContent.textContent=`${taskText} ${taskDateTime ?` | ${taskDateTime}` : ' '}`;
    li.appendChild(taskContent);
    
    const action = document.createElement('div');
    action.className='task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.textContent='complete';
    completeBtn.addEventListener('click',()=> {
        li.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.textContent='Edit';
    editBtn.addEventListener('click',()=>{
        const currentText=taskContent.textContent.split('|')[0];
        const newTask=prompt('Edit task:',currentText);
        if(newTask){
            taskContent.textContent=`${newTask} ${taskDateTime ? `| ${taskDateTime}` : ' '}`;
        }
    });

    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Delete';
    deleteBtn.addEventListener('click',()=>{
        li.remove();
    });

    action.appendChild(completeBtn);
    action.appendChild(editBtn);
    action.appendChild(deleteBtn);

    li.appendChild(action);
    todoList.appendChild(li);

    todoInput.value='';
    todoDate.value='';
});