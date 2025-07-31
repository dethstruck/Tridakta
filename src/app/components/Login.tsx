"use client"

import { useState } from "react"
import Link from 'next/link'
import { signUp, signIn } from '../lib/authService'
import { useRouter } from "next/navigation"


const Login = () => {
    const [ToggleForm, setToggleForm] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: { preventDefault: () => void }, isLogin: boolean) => {
        e.preventDefault();
        try {
            if (isLogin === true) {
            await signIn(email, password);
            alert("Login efetuado com sucesso!");
            router.push('/dashboard')
            } else {
            await signUp(email, password, name);
            alert("Conta criada com sucesso!");
            }
        } catch (error: any) {
            alert(error.message);
        }
    }

    return(
        <div className='overflow-hidden mx-auto flex 2xl:mt-[8%] xl:mt-[5%] mt-[10%] flex-col pb-[2%] border-1 border-offgray backdrop-blur-3xl pt-[4%] lg:pt-[2%] rounded-xl mb-auto shadow-md shadow-offgray/25'>
            <div className="flex flex-row mb-[10%] gap-[15%] justify-center">
                <h1 className={ToggleForm ? "sign-title-false" :"sign-title-true"} onClick={() => setToggleForm(false)}>Login</h1>
                <h1 className={ToggleForm ? "sign-title-true" :"sign-title-false"} onClick={() => setToggleForm(true)}>Sign Up</h1>
            </div>
            <div className={ToggleForm ? "sign-slide -translate-x-[50%]" : "sign-slide"}>
                <form className="flex flex-col items-center h-full w-[50%] px-[6%]" onSubmit={(e) =>handleSubmit(e, true)}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="sign-input" placeholder="Enter your Email" required/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="sign-input" placeholder="Enter your Password" required/>
                    <div className="flex flex-col lg:flex-row w-full justify-between mb-[5%]">
                        <div className="flex flex-row items-center gap-2">
                            <input  id="keep-logged"name="keep-logged" type="checkbox" className="appearance-none w-4 h-4 rounded-lg bg-offgray border-4 border-offgray checked:bg-white transition-all ease-linear"/>
                            <label htmlFor="keep-logged" className="text-white cursor-pointer lg:text-md font-bold">Remember-me</label>
                        </div>
                        <Link href="/">Forgot your Password?</Link>
                    </div>
                    <button type="submit" className="sign-button">Log In</button>
                    <span className="mt-[6%] gap-1 flex">Don't have an account?
                        <span className="cursor-pointer font-bold" onClick={() => setToggleForm(true)}>
                            <u>Sign Up</u>
                        </span>
                    </span>
                </form>
                <form className="flex flex-col items-center h-full w-[50%] px-[6%]" onSubmit={(e) =>handleSubmit(e, false)}>
                    <input onChange={(e) => setName(e.target.value)} type="text" className="sign-input" placeholder="Enter your Name"/>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="sign-input" placeholder="Enter your Favorite email" required/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="sign-input" placeholder="Create your Password" required/>
                    <button type="submit" className="sign-button">Sign Up</button>
                    <span className="mt-[6%] gap-1 flex">Already have an account?
                        <span className="cursor-pointer font-bold" onClick={() => setToggleForm(false)}>
                            <u>Log In</u>
                        </span>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login