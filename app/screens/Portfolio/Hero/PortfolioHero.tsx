
"use client"

import Link from 'next/link'
import React from 'react'

const PortfolioHero = () => {
    return (
        <section id='hero-section'
            className="
        relative w-full 
        p-12 sm:p-0 md:p-0 xl:min-h-0
        bg-[url('/air2.jpg')] 
        bg-cover bg-center bg-no-repeat 
        
        " >
            <div className=' flex sm:py-16 sm:px-12  py-32 px-14 flex-col gap-8 '>
                <div className=' flex items-center justify-center '>

                    <div className="text-4xl font-bold flex-1 items-start sm:text-2xl text-blue-900 ">
                        We’re Giddsfield (Cargo Export-Import Logistics Services) Ltd. <br /> Your  Cargo handling Experts <br />
                    </div>

                </div>

                <span className=" bg-blue-900 p-4 rounded-xl max-w-[125px] max-h-[61px] border   hover:bg-red-500 font-bold">

                    <Link href="/services">
                        Learn More
                    </Link>
                </span>

            </div>
        </section>
    )
}

export default PortfolioHero