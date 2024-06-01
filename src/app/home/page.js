import CardHome from '@/components/components-home/CardHome'
import MySwiperComponent from '@/components/components-home/MySwiperComponent'
import React from 'react'

const homePage = () => {
    return (
        <section className='flex flex-col'>
            <div className='w-full h-[500px] p-5'>
                <MySwiperComponent />
            </div>
            <div className='w-full flex flex-wrap gap-10 p-5 justify-center'>
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
            </div>
        </section>
    )
}

export default homePage