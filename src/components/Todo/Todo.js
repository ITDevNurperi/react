import React, {useEffect, useState} from 'react';
import uniqid from "uniqid";
import TodoItems from "./TodoItem";
import axios from "axios";

const Todo = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('task')) || [])
    const [value, setValue] = useState("")


    /** GET - кабыл алуу **/
    const getAllTasks = async () => {
    //     const response = await fetch('https://63ba53c14482143a3f259ca5.mockapi.io/task')
    //     const result = await response.json()
    //     setTasks(result)
    const response = await axios('https://63ba53c14482143a3f259ca5.mockapi.io/task')
    const {data} = await response
    setTasks(data)
}

    /** DELETE - очуруу **/
    const deleteTask = async (id) => {
        // let localTask = JSON.parse(localStorage.getItem('task')) || []
        // localTask = localTask.filter((el, index) => el.id !== id)
        // // setTasks(tasks.filter((el, index) => el.id !== id))
        // setTasks(localTask)
        // localStorage.setItem('task', JSON.stringify(localTask))
        try {
            // await fetch('https://63ba53c14482143a3f259ca5.mockapi.io/task/' + id, {
            //     method: "DELETE",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            // })
            await axios.delete(`https://63ba53c14482143a3f259ca5.mockapi.io/task/${id}`)

            getAllTasks()
        } catch (e) {
            console.log(e)
        }
    }

    /** POST - бэкендке маалымат кошот **/
    const addTask = async () => {
        // const newTask = {
        //     name: value
        // }
        // let localTask = JSON.parse(localStorage.getItem('task')) || []
        // let foundItem = tasks.some(el => el.name === value)
        // const newTask = {
        //     name: value,
        //     // id: tasks.length ? tasks[tasks.length -1].id + 1 : 0,
        //     id: uniqid(),
        //     isCompleted: false
        // }
        // localTask = [...localTask, newTask]
        // if (!foundItem && value !== "") {
        //     localStorage.setItem('task', JSON.stringify(localTask))
        //     setTasks([...tasks, newTask])
        // } else {
        //     alert("exist")
        // }

        try {
            // await fetch('https://63ba53c14482143a3f259ca5.mockapi.io/task', {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(newTask),
            // })

            await axios.post('https://63ba53c14482143a3f259ca5.mockapi.io/task',{name: value})
            getAllTasks()
        } catch (e) {
            console.log(e)
        }
    }

    /** PUT - бэкендеги маанини озгортот **/
    const updateText = async (id,newText) => {
        // let localTask = JSON.parse(localStorage.getItem('task')) || []
        // localTask = localTask.map(el => el.id === id ? {...el, name: newText} : el)
        // setTasks(localTask)
        // localStorage.setItem('task', JSON.stringify(localTask))

        // const newTask = {
        //     name: newText
        // }
       // await fetch('https://63ba53c14482143a3f259ca5.mockapi.io/task/'+id,{
       //      method:"PUT",
       //      headers: {
       //          'Content-Type': 'application/json'
       //      },
       //      body: JSON.stringify(newTask),
       //  })

       await axios.put('https://63ba53c14482143a3f259ca5.mockapi.io/task/'+id,{
           name: newText
       })
        getAllTasks()
    }

    /** PUT - change status **/
    const isClicked = async (id,) => {
        // let localTask = JSON.parse(localStorage.getItem('task')) || []
        // localTask = localTask.map(el => el.id === id ? {...el, isCompleted: !el.isCompleted} : el)
        // setTasks(localTask)
        // // setTasks(tasks.map(el => el.id === id ? {...el, isCompleted: !el.isCompleted} : el))
        // localStorage.setItem('task', JSON.stringify(localTask))

        const foundItem = tasks.find(el => el.id === id)
        // const newTask = {
        //     isCompleted: !foundItem.isCompleted
        // }

        try {
            // await fetch('https://63ba53c14482143a3f259ca5.mockapi.io/task/'+id,{
            //     method:"PUT",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(newTask),
            // })

            await axios.put('https://63ba53c14482143a3f259ca5.mockapi.io/task/'+id,{
                isCompleted: !foundItem.isCompleted
            })
            getAllTasks()
        }catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    return (<div style={{background: "white"}}>
        <div className='container'>
            <div className='text-3xl py-5 text-red-800 flex flex-row justify-center modal-items--stars'>
                <input onKeyDown={(e) => {
                    if (e.key === "Enter") addTask()
                }} onChange={(event) => setValue(event.target.value)} type="text" id="simple-search"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-xl h-[45px] mx-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search" required/>
                <button onClick={addTask} type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">add
                </button>
            </div>

            <ul className="w-[34%] text-sm font-medium text-gray-900 bg-white rounded-lg  mx-auto border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {
                    tasks.filter(el => !el.isCompleted).map((el, idx) =>
                        <TodoItems
                            el={el}
                            deleteTask={deleteTask}
                            isClicked={isClicked}
                            setTasks={setTasks}
                            updateText={updateText}
                        />)
                }
            </ul>

            <p className="text-black text-center py-10">Законченные дела:</p>

            <ul className="w-96 text-sm font-medium text-gray-900 bg-white rounded-lg  mx-auto border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {
                    tasks.filter(el => el.isCompleted).map((el, idx) => (
                        <li className="py-2 px-4 flex justify-between items-center w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                      <span>
                          <input onClick={() => isClicked(el.id)} checked={el.isCompleted} className="mx-2"
                                 type="checkbox"/>
                          {el.name}
                      </span>
                            <button onClick={() => deleteTask(el.id)} type="button"
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">delete
                            </button>

                        </li>))
                }
            </ul>
        </div>
    </div>);
};
export default Todo;