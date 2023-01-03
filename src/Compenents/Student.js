import React from 'react'
import { ToastProvider } from 'react-toast-notifications';
import Form from './Form'
function Student() {
  return (
    <div className=' flex flex-col md:flex-row-reverse  my-24 md:space-x-5  justify-center  -z-10'>
        <img className= "md:block hidden w-1/2 object-contain" src = "imgs/std-typing.png"/>
        <ToastProvider>
        <Form/>
        </ToastProvider>
    </div>
  )
}

export default Student