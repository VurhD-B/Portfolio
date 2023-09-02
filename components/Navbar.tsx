'use client'
import React from 'react'
import {Icon} from '@iconify/react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex items-center justify-between w-full h-16 bg-neutral-300 shadow-md px-5'>
            <h1 className='font-bold text-xl'>Dhruv's Portfolio</h1>
            <div className='flex gap-5 items-center'>
                <button className='button'>
                    Resume
                </button>
                <a href='https://www.linkedin.com/in/dhruv-benegal-60530b220/' target='_blank'>
                    <Icon icon="pajamas:linkedin" className='md-icon' />
                </a>
                <a href='https://github.com/VurhD-B' target='_blank'>
                    <Icon icon='bi:github' className='md-icon' />
                </a>
            </div>
            
        </div>
    )
}

export default Navbar