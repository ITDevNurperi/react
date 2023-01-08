import React from 'react';

const Todo = () => {
    return (
      <div style={{background:"white"}}>
          <div className="container">
              <div className='text-3xl py-5 text-red-800 flex flex-row flex-wrap justify-center items-start'>
                  <input type="text" id="simple-search"
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-xl h-[45px] mx-3 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[35%] pl-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Search" required/>
                  <button type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red
                  </button>
              </div>

              <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg mx-auto border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">Profile</li>
              </ul>

          </div>
      </div>
    );
};

export default Todo;