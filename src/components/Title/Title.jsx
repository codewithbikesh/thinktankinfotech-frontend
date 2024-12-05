import React from 'react'

function Title({title,description}) {
  return (
   <>
<div className="flex flex-col items-center text-center max-w-screen-md mb-8 lg:mb-16 mx-auto">
  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">{title}</h2>
  <p className="text-gray-500 sm:text-xl dark:text-gray-400">{description}</p>
</div>
   </>
  )
}

export default Title