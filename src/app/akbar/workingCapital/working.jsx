import React from 'react'
import Project from './project'
import Capital from './capital'

const Working = () => {
  return (
    <section className='m-1 capital mt-4 p-3 flex  justify-around flex-wrap'>
      <Capital/>
      <Project/>
    </section>
  )
}

export default Working
