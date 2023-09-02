import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex items-center w-full h-16 bg-neutral-300 shadow-xl px-5'>
            <h1 className='font-bold text-xl'>My Portfolio</h1>
        </div>
    )
}

export default Navbar