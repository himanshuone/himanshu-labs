import React from 'react'

function Modal({modal}) {
  return (
    <>

    <div className=" w-full h-full fixed flex  justify-center items-center">

       <div className='flex bg-white h-3/5 w-3/5 rounded-2xl'>
       <button onClick={()=>modal()}>Button</button>
       </div>
    </div>

    </>
  )
}

export default Modal