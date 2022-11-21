import React from 'react'

export default function Login() {
    return (
        <div className="flex w-[100vw] justify-center items-center m-auto">
            <div className="w-[30vw] h-[100vh] bg-red-200 flex">
                <img src="./logo.svg" alt="" className='w-[1000px]' />
            </div>
            <div className="flex flex-col gap-3 w-[70vw] h-[100vh] bg-gray-200 justify-center text-center items-center m-auto">
                <div>
                    <p className="text-4xl">Welcome to Tweetaholic</p>
                </div>
                <form action="" className='flex flex-col justify-start items-start gap-4 bg-[#03A9F4] px-4 py-4 rounded-lg drop-shadow-lg'>
                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="Email" className='text-[#f5f5f5]'>Email</label>
                        <input type="email" name='Email' placeholder='Please enter your email' className='px-3 py-3 rounded-lg'
                            onChange={(event) => { setLoginEm(event.target.value) }}
                        />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="password" className='text-[#f5f5f5]'>Password</label>
                        <input type="password" name='password' placeholder='Please enter your password' className='px-3 py-3 rounded-lg'
                            onChange={(event) => { setLoginPass(event.target.value) }}
                        />
                    </div>
                    <div className='m-auto'>
                        <Button
                            txt="Sign in"
                            onBtnClick={() => alert('This doesn\'t work yet')}
                        />
                    </div>
                    <p>Don't have an account? <span onClick={() => r.push('/auth/signup')} className='text-white'>Sign Up</span> here </p>
                </form>
                <div>
                    <p className="text-2xl">Please sign in to continue</p>
                </div>
                <div>
                    <Button
                        txt="Sign in with Google"
                        onBtnClick={() => signIn()}
                    />
                </div>
            </div>
        </div>
    )
}
