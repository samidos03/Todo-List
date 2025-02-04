
    var addToDoButton = document.getElementById('addToDo');
    var todocontainer = document.getElementById('todocontainer');
    var inputField = document.getElementById('inputField'); 
    function add(){
        if(inputField.value===""){
            alert("plase enter a task.");
        }else{
            var paragraph=document.createElement('p');
            var span=document.createElement('span');

            paragraph.innerText=inputField.value;
            paragraph.classList.add('task_style');
            span.innerHTML='&#x2715;';
            paragraph.appendChild(span);

            todocontainer.appendChild(paragraph);

        }
     inputField.value=""
    }

    todocontainer.addEventListener('click',function(todo){
        if(todo.target.tagName==="P"){
            todo.target.classList.toggle('task_click');

        }
        else if(todo.target.tagName==="SPAN"){
            todo.target.parentElement.remove();
        }

    });
  

    function updateDateTime() {
        const now = new Date();

        
        const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('fr-FR', options);

        const formattedTime = now.toLocaleTimeString('fr-FR');

        document.getElementById('date-time').textContent = formattedDate + " _ " + formattedTime;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
