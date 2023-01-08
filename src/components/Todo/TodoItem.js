import React from 'react';
import {BsFillPenFill, BsCheckLg} from "react-icons/bs";
import {useState} from "react";

const TodoItems = ({el, deleteTask, isClicked, updateText}) => {
    const [newText, setNewText] = useState(el.name)
    const [edit, setEdit] = useState(false)

    const openInput = () => setEdit(true)
    const closeInput = (id,newText) => {
        updateText(id,newText)
        //setTasks(state => state.map(el => el.id === id ? {...el, name: newText} : el ))
        setEdit(false)
    }


    return (
        <li className="py-2 px-4 flex justify-between items-center w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                      <span>
                          <input checked={el.isCompleted} onClick={() => isClicked(el.id)} className="mx-2" type="checkbox"/>
                          {
                              edit ? <input onKeyDown={(e) => {
                                      if(e.key === 'Enter') closeInput(el.id,newText)
                                  }} onChange={(e) => setNewText(e.target.value)}
                                            className='py-1 px-2 border-0 outline-0 rounded-lg bg-gray-500' defaultValue={newText}
                                            type="text"/>
                                  : <span>{el.name}</span>
                          }

                      </span>

            <div>
                <button
                    onClick={() => edit ? closeInput(el.id,newText) : openInput()}
                    className={`focus:outline-none text-white ${edit ? "bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-700" : " bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300" } font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2  `}>
                    {
                        edit ? <BsCheckLg/> : <BsFillPenFill/>
                    }
                </button>
                <button onClick={() => deleteTask(el.id)} type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">delete
                </button>
            </div>

        </li>
    );
};

export default TodoItems;