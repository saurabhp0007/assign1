import React from 'react'



const Login = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='border border-gray-200 max-w-auto m-4 p-4 bg-[#F7F8F9]'>
                <div className='flex flex-col items-start justify-center'>
                    <div className='pt-80 md:pt-80 lg:pt-80 xl:pt-96 mt-11 text-center'>
                        <span className='font-bold text-2xl'>
                            Welcome to POP-X
                        </span>
                        <br />
                        <span className='text-base text-gray-500'>
                            Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 mt-6'>
                        <a href="/register">
                            <button className='bg-[#6C25FF] hover:bg-[#6C25FF4B] hover:text-black text-white py-2 rounded-md w-80'>
                                Create Account
                            </button>
                        </a>
                        <a href="/login">
                            <button className='bg-[#6C25FF] hover:bg-[#6C25FF4B] hover:text-black text-white font-semibold py-2 rounded-md w-full'>
                                Already Registered? Login
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login