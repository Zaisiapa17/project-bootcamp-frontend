import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const loginPage = () => {
    return (
        <>
            <section className="background-image">
                <div className='flex w-screen h-screen items-center justify-around'>
                    <div>
                        <form>
                            <h1 className='text-gray-900 text-left mb-5 text-2xl font-medium'>Login</h1>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col w-full max-w-sm gap-1.5 text-gray-900">
                                    <Label htmlFor="email" className="text-left">Email</Label>
                                    <Input type="email" id="email" placeholder="input email" />
                                </div>
                                <div className="flex flex-col w-full max-w-sm gap-1.5 text-gray-900">
                                    <Label htmlFor="Password" className="text-left">Password</Label>
                                    <Input type="password" id="Password" placeholder="input Password" />
                                </div>
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">Remember me</Label>
                                </div>
                                <div className="flex items-center space-x-2 w-full">
                                    <Button className='w-full disabled: bg-[#789461]' disabled>Login</Button>
                                </div>
                            </div>
                        </form>
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
