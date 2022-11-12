import React, { useState, } from 'react';
import { apiLogin } from '../../api/api';
import jsCookie from "js-cookie"
import { ILoginResponse } from '../../api/types/login';

export const cookieName = process.env.REACT_APP_COOKIENAME || "";

export function Login() {
  const [user, setUser] = useState({})

  function onChangeState(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    if (value.length < 1) {
      const copyParams: any = {...user};
      delete copyParams[name];
      setUser(copyParams)
    } else {
      setUser(prevState => ({
        ...prevState,
      }))
    }
  }

  async function onLogin() {
    console.log(user);
    
    let response = await apiLogin({username: "user", password:"abcd"})

    if(response && response.status === "success") {
      let data = response as ILoginResponse
      const auth = `${data.type} ${data.token}`;
      jsCookie.set(cookieName, auth);
    } 
  }

  return (
    <div className=" p-4 w-full max-w-sm bg-white border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
            <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required onChange={onChangeState} />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={onChangeState}/>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => {onLogin();}}>Login</button>
        </form>
    </div>
  )
}
