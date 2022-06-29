import React from 'react'
import {BouncingBalls,FillingBottle,FlippingSquare,CircularProgress} from "react-cssfx-loading";
import '../App.css'

function Loading() {
  return (
    <div className='loader'>
    <div className='loader1'>
    <CircularProgress width="100px" height="100px"/>
    </div>
    </div>
  )
}

export default Loading