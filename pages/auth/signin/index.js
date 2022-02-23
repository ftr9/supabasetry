import React, { useState } from 'react'
import Link from 'next/link'
import supabase from '../../../supabaseClient';
import { useRouter } from 'next/router';

const index = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const onpasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSignUp = async () => {
        if (email && password) {
            const { error } = await supabase.auth.signIn({
                email: email,
                password: password
            })
            if (!error) {
                router.push("/");
            } else {
                console.log(error);
            }
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-4  py-2">
            <h2>Sign in</h2>
            <input
                onChange={emailChange}
                value={email}
                type={'text'}
                className="rounded-sm border border-red-400 py-[5px] px-2 outline-none"
                placeholder={'Email'}
            ></input>
            <input
                onChange={onpasswordChange}
                value={password}
                className="rounded-sm border border-red-400 py-[5px] px-2 outline-none"
                type={'password'}
                placeholder={'password'}
            />
            <button onClick={onSignUp} className="w-1/5 bg-red-500 py-1 text-white ">Sign Up</button>
            <div className="  underline">
                <Link href={'/auth/signup'}> No account ?</Link>
            </div>
        </div>
    )
}

export default index