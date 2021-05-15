import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const authenticateUser = () => {
        alert(`${username} logged in!`);
    };

    return (
        <form 
            className='w-full max-w-xs'
            onSubmit={ authenticateUser }
        >
            <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                    <label 
                        className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' 
                        htmlFor='inline-full-name'
                    >
                        Username
                    </label>
                </div>
                <div className='md:w-2/3'>
                    <input 
                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' 
                        id='inline-full-name' 
                        type='text' 
                        name='username' 
                        value={ username }
                        onChange={ handleUsernameChange }
                    />
                </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3'>
                    <label 
                        className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' 
                        htmlFor='inline-password'
                    >
                        Password
                    </label>
                </div>
                <div className='md:w-2/3'>
                    <input 
                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' 
                        id='inline-password' 
                        type='password'
                        name='password' 
                        value={ password }
                        onChange={ handlePasswordChange }
                    />
                </div>
            </div>
            <div className='md:flex md:items-center'>
                <div className='md:w-1/3'></div>
                <div className='md:w-1/3'>
                    <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='button'>
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Login;