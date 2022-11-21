import React from 'react'
import Button from '../../components/Button/Button'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function signup() {
    const r = useRouter();
    const [registerEm, setRegisterEm] = useState('');
    const [registerPass, setRegisterPass] = useState('');

    const Register = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEm, registerPass)
            console.log(user)
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[100vh]'>
            <form action="" className='flex flex-col justify-start items-start gap-4 bg-[#03A9F4] px-4 py-4 rounded-lg drop-shadow-lg'>
                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="Email" className='text-[#f5f5f5]'>Email</label>
                    <input type="email" name='Email' placeholder='Please enter your email' className='px-3 py-3 rounded-lg'
                        onChange={(event) => { setRegisterEm(event.target.value) }} />
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="password" className='text-[#f5f5f5]'>Password</label>
                    <input type="password" name='password' placeholder='Please enter your password' className='px-3 py-3 rounded-lg'
                        onChange={(event) => { setRegisterPass(event.target.value) }} />
                </div>
                <div className='m-auto'>
                    <Button
                        txt="Create account"
                        onBtnClick={Register}
                    />
                </div>
                <p className='m-auto'>Already a user? <span onClick={() => r.push('/')} className='text-white'>Sign In</span> here </p>
            </form>



        </div>
    )
}
