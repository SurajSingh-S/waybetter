import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { login as authlogin} from '../store/authslice'
import {Bbtton,Input,Logo} from './index'
import authservice from '../Appwrite/auth'
import { useDispatch } from 'react-redux'
import useForm from "./react-hook-form"

function Login() {
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const {register,handlesubmit}= useForm()
    const [error,seterror]= useState("")

    const login= async(data)=>{
        seterror("")
        try{
           const session=await authservice.login(data)
           if(session ){
            const userdate = await authservice.getcurrentuser()
            if(userdate)  {dispatch(authlogin(userdate )) }
            //agr user yha aa hi gya h uska pura kaam ho gya h to use khi or bhj bhj do->
            navigate("/");
            
           }
        }
        catch (error){
            seterror(error.message)
        }

    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>

      {error && <p className='text-red-600 mt-8 text-center'> {error}</p>}
      <form onSubmit={handlesubmit(login)} className='mt-8'>
        <div className='space-y-5'>
          <Input
          label="Email:"
          placeholder="enter your email"
          type="email"
          {...register("email",{
            required:true,
            validate:{matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
              "Email address must be a valid address",}
          })}       //we have to use spread operator everytime for register 
                    //if you dont wanna go with validate don't go 
          />

          <Input 
          label="Password"
          placeholder="enter your password"
          type="password"
          {...register("password",{
             required:true,
          })}

          />

          <Bbtton 
          type='submit'
          className='w-full'>
            Sign in</Bbtton>
        </div>
      </form>
        </div>
    </div>
  )
}

export default Login



//inside ( ) in register there is a key that we have to pass