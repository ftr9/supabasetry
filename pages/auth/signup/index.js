import React, { useState } from 'react'
import Link from 'next/link'
import supabase from '../../../supabaseClient';


const index = () => {

    const [isSignUp, setSignUpStatus] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const onpasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSignUp = async () => {
        if (email && password) {
            try {
                const { error } = await supabase.auth.signUp({
                    email: email,
                    password: password
                })
                if (error) {
                    console.log(error);
                } else {
                    setSignUpStatus(true);
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-4  py-2">
            <h2>Sign Up</h2>
            <input
                onChange={emailChange}
                type={'text'}
                className="rounded-sm border border-red-400 py-[5px] px-2 outline-none"
                placeholder={'Email'}
            ></input>
            <input
                onChange={onpasswordChange}
                className="rounded-sm border border-red-400 py-[5px] px-2 outline-none"
                type={'password'}
                placeholder={'password'}
            />
            <button onClick={onSignUp} className="w-1/5 bg-red-500 py-1 text-white ">Sign Up</button>
            {isSignUp && <span className='text-sm text-red-500 font-bold' >please make sure to check your email for confirmation</span>}

            <div className="  underline">
                <Link href={'/auth/signin'}> Already have an account ?</Link>
            </div>
        </div>
    )
}

export default index