import React from 'react'
import Image from 'next/image'
import InputLogin from '@/components/components-login/InputLogin'


const loginPage = () => {
    return (
        <>
            <section className="background-image">
                <div className='flex w-screen h-screen items-center justify-around'>
                    <div>
                        <InputLogin/>
                    </div>
                    <div>
                        <Image src={"/images/logo.png"} width={250} height={250} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default loginPage
