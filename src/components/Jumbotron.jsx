import React from 'react'

function Jumbotron({subtitle, title, description}) {
  return (
    <section className="jumbotron bg-transparent">
        <p className='font-primary-color opacity font-primary-family text-uppercase role-custom'>{subtitle}</p>
        <h3 className='font-primary-color font-primary-family text-uppercase name-custom'>{title}</h3>
        <p className='font-secondary-color font-tertiary-family bio-custom'>{description}</p>
    </section>
  )
}

export default Jumbotron