import React from 'react'

type Props = {}

const Card = (props: Props) => {
    return (
        <div className='flex flex-col items-center w-[20%] h-[25%] bg-neutral-400 mx-5 rounded-md px-5 py-3 shadow-xl'>
            <h1 className='font-medium text-lg'>Card</h1>
        </div>
    )
}

export default Card