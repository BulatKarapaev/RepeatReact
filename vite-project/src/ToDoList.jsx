import React, {useState} from 'react'

function ToDoList() {

    //стили на 3 :10
    const [tasks,setTasks]   = useState(["Eat Breakfast", "Take a shower","Walk a dog" ]);

    const [newTasks,setNewTasks] = useState("")
    

    function handleInputChange(event){
        
        setNewTasks(event.target.value);


    }  

    function addTask() {

        if(newTasks.trim() !== "") {

        setTasks(t => [...t, newTasks]);
        setNewTasks("");
        }
        



    }

    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i != index );
        setTasks(updatedTasks)


    }

    function moveTask(index) {

        if(index > 0 ) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index -1] ] =
            [updatedTasks[index -1], updatedTasks[index]];
            setTasks(updatedTasks)


        }

    }

    function moveTaskDown(index) {

        if(index < tasks.length -1  ) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1] ] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)


        }



    }

    return(
        <div className='to-do-list'>

            <h1>To-Do list </h1>


            <div>
                <input
                type='text' 
                placeholder='Enter task....'
                value={newTasks}
                onChange={handleInputChange}
                />
                <button className='add-button'
                onClick={addTask}> 
                    Add</button>

            </div>


            <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                    <span className='text'>
                        {task}

                    </span>
                    <button className='delete-button' onClick= {() => deleteTask(index)}> Delete </button>
                    <button className='move-button' onClick= {() => moveTask(index)}> ☝️</button>
                    <button className='move-button' onClick= {() =>  moveTaskDown (index)}> 👇</button>
            </li>
            )}
            </ol>


        </div>

        
        
        );


}

export default ToDoList;