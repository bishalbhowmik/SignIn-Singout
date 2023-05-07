import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validations from '../LoginValidation';
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [errors,setErrors] = useState({})
    const [values,setValues] = useState({
        email:'',
        password:''
    })

    const handleInput=(event) =>{
        event.preventDefault();
        setValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(Validations(values));

        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                }
                else {
                    alert("No record existed");
                }
            })
            .catch(err =>console.log(err));
        }
    }



    return (
        <div className='bg-orange-200 flex justify-center items-center h-[100vh]'>
            <div className='bg-orange-400 w-[400px] flex flex-col items-center'>
                <h3 className='text-2xl font-bold text-white mb-[20px]'>Login Here</h3>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className='flex mb-[-20px] text-lg font-semibold'>Email</label><br />
                        <input type="email" name="email" onChange={handleInput} id="email" className='py-[2px] rounded mb-[20px] flex' placeholder="Email" />

                        {errors.email && <span className='text-[red]'>{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className='flex mb-[-20px] text-lg font-semibold'>Password</label><br />
                        <input type="password" name="password" onChange={handleInput} id="password" className='py-[2px] rounded mb-[20px] flex' placeholder="Password" />
                        {errors.password && <span className='text-[red]'>{errors.password}</span>}
                    </div>
                    <button type="submit" className='bg-blue-300 rounded w-[30%] p-[3px] text-white font-bold text-lg mb-[14px]'>Log In</button>

                    <Link to="/signup">
                        <button className='border border-solid border-black text-white'>Create An Account</button>
                    </Link>
                </form>
            </div>

        </div>
    );
};

export default Login;