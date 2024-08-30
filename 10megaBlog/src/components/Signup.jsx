import React,{useState} from "react";
import authservice from "../Appwrite/auth";
import { Link,useNavigate } from "react-router-dom";
import { login } from "../store/authslice";
import {Bbtton,Input,Logo} from "./index";
import { useDispatch } from "react-redux";
import {useForm} from 'react-hook-form'


function Signup() {
    const navigate= useNavigate()
    const [error,seterror]= useState("")
    const dispatch= useDispatch()
    const {register,handlesubmit}= useForm()

    const create= async(data)=>{
      seterror("")       //empty out error
      try{
            const userdata=await authservice.createaccount(data)
            if(userdata){
                const userdata= await authservice.getcurrentuser()
                if(userdata) dispatch(login(userdata));
                navigate("/")
            }
      }  
      catch(error){
        seterror(error.message)
      }
    }
  return (
    <div className="flex items-center justify-center">
        <div className=" ={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}">
         
            <div className=" mb-2 flex justify-center">
                <span className="inline-black w-fu;; max-w-[100px]">
                    <Logo width="100%"/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Signup to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
  
        <form onsubmit={handlesubmit (create)}>
            <div className="space-y-5">
                <Input
                label="full name"
                place="enter your name"
                {...register("name",{
                    required:true
                })}
                />

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
               label="Password:"
               placeholder="enter your password"
               type="password"
               {...register("password",{
                required:true
               })}
               /> 

               <Bbtton>Create account</Bbtton>
            </div>
        </form>
        </div>
      
    </div>
  )
}

export default Signup

