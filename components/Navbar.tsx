'use client'
import React from 'react'
import {Icon} from '@iconify/react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex items-center justify-between w-full h-16 bg-neutral-300 shadow-xl px-5'>
            <h1 className='font-bold text-xl'>My Portfolio</h1>
            <a href='https://www.linkedin.com/in/dhruv-benegal-60530b220/' target='_blank'>
                <Icon icon="pajamas:linkedin" className='md-icon' />
            </a>
        </div>
    )
}

export default Navbar