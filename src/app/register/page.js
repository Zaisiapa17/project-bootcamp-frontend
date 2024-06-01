import React from 'react'
import Image from 'next/image'
import InputRegister from '@/components/components-register/InputRegister'

const registerPage = () => {
    return (
        <>
            <section className="background-image">
                <div className='flex w-screen h-screen items-center justify-around'>
                    <InputRegister/>
                    <div>
                        <Image src={"/images/logo.png"} width={250} height={250} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default registerPage
