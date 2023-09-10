"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.9)

  return (
    <motion.section 
        ref={ref}
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
            I am a student at the University of Rochester in New York. I am currently pursuing a BS in 
            Computer Science. As a passionate computer science student, I embody an insatiable ambition 
            to push the boundaries of what's possible in the world of programming.
            
            My favorite part of programming is the problem-solving aspect: whether it's in learning a new web development 
            stack or solving complex algorithmic problems, I love the process of dissecting problems into components and 
            engineering elegant solutions. 

            I look forward to every chance to contribute my skills and knowledge to the ever-evolving tech landscape.
        </p>
        <p>

        </p>
    </motion.section>
  )
}
